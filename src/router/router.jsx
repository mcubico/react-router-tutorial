import { createBrowserRouter } from "react-router-dom"

import RootPage, { loader as rootGetAllContacts, action as rootNewContactAction } from "../pages/RootPage"
import ErrorPage from "../pages/errors/ErrorPage"
import ContactPage, { loader as contactLoader, destroyContactAction } from "../pages/contacts/ContactPage"
import EditContactPage, { action as contactEditAction } from "../pages/contacts/ContactEditPage"

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
    loader: rootGetAllContacts,
    action: rootNewContactAction,
    children: [
      {
        path: '/contacts/:contactId',
        element: <ContactPage />,
        loader: contactLoader
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContactPage />,
        loader: contactLoader,
        action: contactEditAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyContactAction,
        errorElement: <div>Oops! There was an error.</div>,
      },
    ]
  }
])

export default router