import React, { useState } from 'react';
import './CustomerSupportForm.css';
import Navbar from './Navbar';
const CustomerSupportForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted');
  };

  return (
    <div>
    <Navbar/>
    <div className="cust">
    <h2><center>Customer Support Form</center></h2>
    <div className="customer-support-form">
      <form onSubmit={handleSubmit}>
      <br/><br/>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
    </div>
  );
};

export default CustomerSupportForm;