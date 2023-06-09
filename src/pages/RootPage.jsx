/* eslint-disable react-refresh/only-export-components */
import { Form, NavLink, Outlet, redirect, useLoaderData, useNavigation, useSubmit } from "react-router-dom"

import { createContact, getContacts } from '../services/contact.service';
import { useEffect } from "react";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("query");
  const contacts = await getContacts(query);

  return { contacts, query }
}

export const action = async () => {
  const contact = await createContact()
  return redirect(`/home/contacts/${contact.id}/edit`)
}

const RootPage = () => {
  const { contacts, query } = useLoaderData()
  const navigation = useNavigation()
  const submit = useSubmit()
  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("query")

  useEffect(() => {
    document.getElementById('query').value = query
  }, [query])

  return <>
    <div id="sidebar">

      <h1>React Router Tutorial</h1>

      <div>

        <Form id="search-form" role="search">
          <input
            id="query"
            aria-label="Search contacts"
            placeholder="Search"
            type="search"
            name="query"
            defaultValue={query}
            className={searching ? "loading" : ""}
            onChange={(event) => {
              if (event.currentTarget.value.length == 0 || event.currentTarget.value.length > 2)
                submit(event.currentTarget.form)
            }}
          />
          <div
            id="search-spinner"
            aria-hidden
            hidden={!searching}
          />
          <div
            className="sr-only"
            aria-live="polite"
          ></div>
        </Form>

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