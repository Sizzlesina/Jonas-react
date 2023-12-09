/** @format */

import { Form } from "react-router-dom";

function InputField() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <Form method="POST">
        <input
          type='text'
          name='firstName'
          id='firstName'
          placeholder='Enter your first name'
        />
        <input
          type='text'
          name='lastName'
          id='lastName'
          placeholder='Enter your last name'
        />
        <input type='text' name='id' id='id' placeholder='Enter your id' />
        <button type='submit' className='submitButton' onSubmit={handleSubmit}>
          Submit
        </button>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  console.log(request)
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  return null;
}

export default InputField;
