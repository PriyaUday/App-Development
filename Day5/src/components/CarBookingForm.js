// import React, { useState } from 'react';
// import './CarBookingForm.css';

// const CarBookingForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [pickupDate, setPickupDate] = useState('');
//   const [returnDate, setReturnDate] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform form submission logic here
//     console.log('Form submitted');
//   };

//   return (
//     <div className="car-booking-form">
//       <h2>Car Booking Form</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />

//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <label htmlFor="phone">Phone:</label>
//         <input
//           type="tel"
//           id="phone"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           required
//         />

//         <label htmlFor="pickupDate">Pickup Date:</label>
//         <input
//           type="date"
//           id="pickupDate"
//           value={pickupDate}
//           onChange={(e) => setPickupDate(e.target.value)}
//           required
//         />

//         <label htmlFor="returnDate">Return Date:</label>
//         <input
//           type="date"
//           id="returnDate"
//           value={returnDate}
//           onChange={(e) => setReturnDate(e.target.value)}
//           required
//         />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default CarBookingForm;
import React, { useState } from 'react';
import './CarBookingForm.css';

const CarBookingForm = () => {
  const [name, setName] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [serviceAddOns, setServiceAddOns] = useState([]);
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted');
  };

  const handleServiceAddOnsChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setServiceAddOns((prevAddOns) => [...prevAddOns, value]);
    } else {
      setServiceAddOns((prevAddOns) =>
        prevAddOns.filter((addOn) => addOn !== value)
      );
    }
  };

  return (
    <div className="car-booking-form">
      <h2>BOOK HERE !</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        

        

        <label htmlFor="pickupDate">Pickup Date:</label>
        <input
          type="date"
          id="pickupDate"
          value={pickupDate}
          onChange={(e) => setPickupDate(e.target.value)}
          required
        />

        <label htmlFor="returnDate">Return Date:</label>
        <input
          type="date"
          id="returnDate"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
          required
        />

        <label htmlFor="serviceAddOns">Service Add-ons:</label>
        <div>
          <label>
            <input
              type="checkbox"
              value="carWash"
              onChange={handleServiceAddOnsChange}
            />
            Car Wash
          </label>
          <label>
            <input
              type="checkbox"
              value="interiorCleaning"
              onChange={handleServiceAddOnsChange}
            />
            Interior Cleaning
          </label>
          <label>
            <input
              type="checkbox"
              value="fluidTopUps"
              onChange={handleServiceAddOnsChange}
            />
            Fluid Top-ups
          </label>
        </div>

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CarBookingForm;