import { createBrowserRouter } from "react-router-dom"

import RootPage, { loader as rootLoader } from "../pages/RootPage"
import ErrorPage from "../pages/errors/ErrorPage"
import ContactPage from "../pages/contacts/ContactPage"

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: '/contacts/:contactId',
        element: <ContactPage />
      }
    ]
  }
])

export default router