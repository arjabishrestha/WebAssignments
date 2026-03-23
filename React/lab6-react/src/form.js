import { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name === "") {
      alert("Please enter your name");
      return;
    }

    if (!email.includes("@")) {
      alert("Please enter a valid email");
      return;
    }

    if (phone.length < 10) {
      alert("Phone number must be 10 digits");
      return;
    }

    alert("Form Submitted Successfully!");
    
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="form-container">
      <h1>Contact Form</h1>
      
      <form onSubmit={handleSubmit}>
        
        <label>Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <br/>
        <br/>
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <br/>
        <br/>
        <label>Phone Number:</label>
        <input 
          type="number" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
        />
        <br/>
        <br/>
        <label>Message:</label>
        <textarea 
          value={message} 
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <br/>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;