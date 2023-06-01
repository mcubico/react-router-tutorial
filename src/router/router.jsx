import { Navigate, Route, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom"

import RootPage, { loader as rootGetAllContacts, action as rootNewContactAction } from "../pages/RootPage"
import ErrorPage from "../pages/errors/ErrorPage"
import ContactPage, { loader as contactLoader, destroyContactAction, favoriteAction } from "../pages/contacts/ContactPage"
import EditContactPage, { action as contactEditAction } from "../pages/contacts/ContactEditPage"
import IndexPage from "../pages/IndexPage"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/home' />
  },
  {
    path: '/home',
    element: <RootPage />,
    errorElement: <ErrorPage />,
    loader: rootGetAllContacts,
    action: rootNewContactAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <IndexPage />,
          },
          {
            path: '/home/contacts/:contactId',
            element: <ContactPage />,
            loader: contactLoader,
            action: favoriteAction,
          },
          {
            path: "/home/contacts/:contactId/edit",
            element: <EditContactPage />,
            loader: contactLoader,
            action: contactEditAction,
          },
          {
            path: "/home/contacts/:contactId/destroy",
            action: destroyContactAction,
          },
        ]
      }
    ],
  }
])

export const routerJSX = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navigate to='/home' />} />
      <Route
        path="/home"
        element={<RootPage />}
        errorElement={<ErrorPage />}
        loader={rootGetAllContacts}
        action={rootNewContactAction}
      >
        <Route errorElement={<ErrorPage />}>
          <Route index element={<IndexPage />} />
          <Route
            path='/home/contacts/:contactId'
            element={<ContactPage />}
            loader={contactLoader}
            action={favoriteAction}
          />
          <Route
            path="/home/contacts/:contactId/edit"
            element={<EditContactPage />}
            loader={contactLoader}
            action={contactEditAction}
          />
          <Route
            path="/home/contacts/:contactId/destroy"
            action={destroyContactAction}
          />
        </Route>
      </Route>
    </>
  )
)

export default router