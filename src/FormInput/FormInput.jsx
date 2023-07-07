import './FormInput.css';
import { useState } from 'react';
import { useContext } from 'react';
import { FormContext } from '../Form/Form';

function FormInput(props) {
  const {
    label, 
    type = 'text', 
    name, 
    value, 
    onChange
  } = props;

   const formContext = useContext(FormContext);
   const { form, handleFormChange } = formContext;
   console.log(`name -> ${name} value -> ${form[name]} type -> ${type}` ); 
  return (
    <div className="FormInput">
      <label>{label}</label>
      {type == 'select' ? (
        <select>
          {
            form[name]?.map((value, index) => (
              <option value={value}>{value}</option>    
              ))
          }
        
      </select>
      ): (
        <input
        type={type}
        name={name}
        value={form[name]}
        onChange={handleFormChange}
        />
       )}

      
    </div>
  )
}

export default FormInput;