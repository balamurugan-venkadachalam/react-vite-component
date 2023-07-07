import './App.css';
import FormInput from './FormInput/FormInput';
import { useState } from 'react';
import Form, { FormContext } from './Form/Form';
import React from 'react';

function App() {
  // const formContext = useContext(FormContext);
  // const { form, handleFormChange } = formContext;
  
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <Form initialValues={{
          prefix: ["Mr", "Mrs"],
          firstName: 'x',
          lastName: 's',
          emailAddress: '',
          password: ''
        }}>
          <FormInput 
          type="select"
          label="Prefix" 
          name="prefix" />
        <FormInput 
          label="First Name" 
          name="firstName" />
        <FormInput 
          label="Last Name" 
          name="lastName" />
        <FormInput 
          label="Email Address" 
          type="email" 
          name="emailAddress" />
        <FormInput 
          label="Password" 
          type="password" 
          name="password" />
      </Form>

      <h1>Login</h1>
      <Form initialValues={{
        username: '',
        password: ''
      }}>
        <FormInput
          label="Username"
          name="username" />
        <FormInput
          label="Password"
          name="password"
          type="password" />
      </Form>
    </div>
  );
}

export default App;
