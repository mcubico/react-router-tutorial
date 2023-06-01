/* eslint-disable react-refresh/only-export-components */
import { Form, redirect, useLoaderData } from "react-router-dom";
import { updateContact } from "../../services/contact.service";

export const action = async ({ request, params }) => {
  // Get all values by its name properties form
  const formData = await request.formData()

  // Transform formData to an object (updates.first, updates.last, etc)
  const updates = Object.fromEntries(formData)

  await updateContact(params.contactId, updates)

  return redirect(`/contacts/${params.contactId}`)
}

const EditContactPage = () => {
  const { contact } = useLoaderData();

  return (
    <Form method="post" id="contact-form">

      <p>
        <span>Name</span>
        <input
          placeholder="First"
          aria-label="First name"
          type="text"
          name="first"
          defaultValue={contact.first}
        />
        <input
          placeholder="Last"
          aria-label="Last name"
          type="text"
          name="last"
          defaultValue={contact.last}
        />
      </p>

      <label>
        <span>Twitter</span>
        <input
          type="text"
          name="twitter"
          placeholder="@jack"
          defaultValue={contact.twitter}
        />
      </label>

      <label>
        <span>Avatar URL</span>
        <input
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          type="text"
          name="avatar"
          defaultValue={contact.avatar}
        />
      </label>

      <label>
        <span>Notes</span>
        <textarea
          name="notes"
          defaultValue={contact.notes}
          rows={6}
        />
      </label>

      <p>
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </p>

    </Form>
  );
}

export default EditContactPage