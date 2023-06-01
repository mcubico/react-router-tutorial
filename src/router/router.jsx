import { Navigate, createBrowserRouter } from "react-router-dom"

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
        errorElement: <div>Oops! There was an error.</div>,
      },
    ]
  }
])

export default router