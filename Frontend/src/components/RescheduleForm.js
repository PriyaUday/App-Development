import React, { useState } from 'react';
import "../components/RescheduleForm.css"
import Navbar from './Navbar';

const RescheduleForm = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform the rescheduling logic here
    console.log('Rescheduling...');
    console.log('Name:', name);
    console.log('Date:', date);
    console.log('Time:', time);
    console.log('Reason:', reason);

    // Clear form fields
    setName('');
    setDate('');
    setTime('');
    setReason('');
  };

  const handleCancel = () => {
    // Perform cancellation logic here
    console.log('Cancellation...');
  };

  return (
    <div>
      <Navbar />
      <div className='background-container'>
        <div className='form-container'>
          <h1><center>EDIT YOUR SCHEDULE !</center></h1>
          <br></br>
          <br></br>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
            />
            <br></br>
            <br></br>
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={handleDateChange}
              required
            />
            <br></br>
            <br></br>
            <label htmlFor="time">Time:</label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={handleTimeChange}
              required
            />
            <br></br>
            <br></br>
            <button className='Reschedule_btn' type="submit">Reschedule</button>
            <br></br>
            <br></br>
            <br></br>
            <label htmlFor="reason">Reason for Canceling:</label>
            <textarea
              id="reason"
              value={reason}
              onChange={handleReasonChange}
              required
            ></textarea>
            <button className='Reschedule_btns' type="button" onClick={handleCancel}>
              Cancel Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RescheduleForm;
