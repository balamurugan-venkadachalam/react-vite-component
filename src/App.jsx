import './App.css';
import FormInput from './FormInput/FormInput';
import { useState } from 'react';
import Form, { FormContext } from './Form/Form';
import React from 'react';

function App() {


  return (
    <div className="App">
      <h1>Sign Up 6</h1>
      <Form>
        <FormContext.Consumer>{({form, handleFormChange}) => {
          <>
        <FormInput 
          label="First Name" 
          name="firstName" 
          value={form.firstName}
          onChange={handleFormChange} />
        <FormInput 
          label="Last Name" 
          name="lastName" 
          value={form.lastName}
          onChange={handleFormChange} />
        <FormInput 
          label="Email Address" 
          type="email" 
          name="emailAddress" 
          value={form.emailAddress}
          onChange={handleFormChange} />
        <FormInput 
          label="Password" 
          type="password" 
          name="password" 
          value={form.password}
          onChange={handleFormChange} />      
          </>
        }}
        </FormContext.Consumer>
      </Form>
    </div>
  );
}

export default App;
