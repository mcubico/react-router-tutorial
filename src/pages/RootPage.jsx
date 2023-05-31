import { Link, Outlet, useLoaderData } from "react-router-dom"

import { getContacts } from '../services/contact.service';

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  const contacts = await getContacts()  
  return contacts
}

const RootPage = () => {
  const { contacts } = useLoaderData()

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

        <form method="post">
          <button type="submit">New</button>
        </form>

      </div>

      <nav>
        {
          contacts?.length
            ? (
              <ul>
                {
                  contacts.map((contact) => (
                    <li key={contact.id}>
                      <Link to={`contacts/${contact.id}`}>

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

                      </Link>
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

    <div id="detail">
      <Outlet />
    </div>
  </>
}

export default RootPage