import { useState } from 'react';
import './Form.css';
import React from 'react';

export const FormContext = React.createContext({
  form: {},
  handleFormChange: () => {}
});


function Form(props) {
  const { children } = props;

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: ''
  });

  const handleFormChange = (event) => {
    // Get the name of the field that caused this change event
    // Get the new value of this field
    const { name, value } = event.target;

    // Assign new value to the appropriate form field
    const updatedForm = {
      ...form,
      [name]: value
    };

    console.log('Form changed: ', updatedForm);

    // Update state
    setForm(updatedForm);
  };

  return (
    <form className="Form">
      {children}
    </form>
  );

  <FormContext.Provider value={{
    form,
    handleFormChange
  }}>
    {children}
  </FormContext.Provider>
}
export default Form;





