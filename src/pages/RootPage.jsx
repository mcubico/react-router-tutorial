/* eslint-disable react-refresh/only-export-components */
import { Form, NavLink, Outlet, redirect, useLoaderData, useNavigation } from "react-router-dom"

import { createContact, getContacts } from '../services/contact.service';

export const loader = async () => {
  const contacts = await getContacts()
  return { contacts }
}

export const action = async () => {
  const contact = await createContact()
  return redirect(`/contacts/${contact.id}/edit`)
}

const RootPage = () => {
  const { contacts } = useLoaderData()
  const navigation = useNavigation()

  return <>
    <div id="sidebar">

      <h1>React Router Tutorial</h1>

      <div>

        <form id="search-form" role="search">
          <input
            id="q"
            aria-label="Search contacts"
            placeholder="Search"
            type="search"
            name="q"
          />
          <div
            id="search-spinner"
            aria-hidden
            hidden={true}
          />
          <div
            className="sr-only"
            aria-live="polite"
          ></div>
        </form>

        <Form method="post">
          <button type="submit">New</button>
        </Form>

      </div>

      <nav>
        {
          contacts?.length
            ? (
              <ul>
                {
                  contacts.map((contact) => (
                    <li key={contact.id}>
                      <NavLink
                        to={`contacts/${contact.id}`}
                        className={({ isActive, isPending }) =>
                          isActive
                            ? "active"
                            : isPending
                              ? "pending"
                              : ""
                        }
                      >
                        {contact.first || contact.last
                          ? (
                            <>
                              {contact.first} {contact.last}
                            </>
                          )
                          : (
                            <i>No Name</i>
                          )
                        }

                        {" "}

                        {contact.favorite && <span>★</span>}
                      </NavLink>
                    </li>
                  ))
                }
              </ul>
            )
            : (
              <p>
                <i>No contacts</i>
              </p>
            )
        }
      </nav>

    </div>

    <div
      id="detail"
      className={navigation.state === 'loading' ? 'loading' : ''}
    >
      <Outlet />
    </div>
  </>
}

export default RootPage