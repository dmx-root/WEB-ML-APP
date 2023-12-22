import { useState } from 'react';
import React from 'react';
import '../style/formEnvelopeComponent.css';

export function FormEnvelopeComponent({children, onSubmit}){
    const [formState, setFormState] = useState({});

    const handleInputChange = (name, value) => {
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit(formState);
    };
    //
    return(
        <div className="form-evelope-component-container">
            <form id="form-envelope-component-form-container" onSubmit={handleSubmit}>
                {React.Children.map(children, (child) =>
                    React.cloneElement(child, {
                    onChange: (value) => handleInputChange(child.props.name, value.target.value),
                    value: formState[child.props.name] || '',
                    })
                )}
            </form>
        </div>
    )
}