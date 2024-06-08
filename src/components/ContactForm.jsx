import { useState } from 'react';

const ContactForm = () => {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(inputs);
    }

    return (
      <form onSubmit={handleSubmit}>
       <label> Name
        <input 
        type="text"
        name="name"
        value={inputs.name || ""}
        onChange={handleChange}
         />
       </label>
       <label> Email
        <input 
        type="text" 
        name="email"
        value={inputs.email || ""}
        onChange={handleChange}
        />
       </label>
       <label>
        <input type="submit"/>
       </label>

        </form>
    )
  };
  
  export default ContactForm;