// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // import './CarBookingForm.css';

// // const CarBookingForm = () => {
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [phone, setPhone] = useState('');
// //   const [pickupDate, setPickupDate] = useState('');
// //   const [returnDate, setReturnDate] = useState('');
// //   const [serviceAddOns, setServiceAddOns] = useState([]);
// //   const [location, setLocation] = useState('');
// //   const [registrationNumber, setRegistrationNumber] = useState('');
// //   const [carModel, setCarModel] = useState('');
// //   const [emergencyNumber, setEmergencyNumber] = useState('');
// //   const [numVehicles, setNumVehicles] = useState('');
// //   const [selectedService, setSelectedService] = useState([]);

// //   const navigate = useNavigate();

// //   // Array of car models
// //   const carModels = ['Maruti', 'Toyota', 'Honda', 'Hyundai', 'Ford', 'BMW', 'Mercedes', 'Audi'];

// //   // List of available services
// //   const services = [
// //     { id: 'carMaintenance', label: 'CarMaintenance' },
// //     { id: 'oil change', label: 'oil change' },
// //     { id: 'brake inspection', label: 'Brake inspection' },
// //     { id: 'engine tuneup', label: 'engine tune-up' },

// //   ];



// //   // alret msg



// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Perform form submission logic here
// //     console.log('Form submitted');
// //     navigate('/CostEstimation');
// //   };

// //   const handleServiceAddOnsChange = (e) => {
// //     const { value, checked } = e.target;
// //     if (checked) {
// //       setServiceAddOns((prevAddOns) => [...prevAddOns, value]);
// //     } else {
// //       setServiceAddOns((prevAddOns) => prevAddOns.filter((addOn) => addOn !== value));
// //     }
// //   };

// //   const handleSelectedServiceChange = (e) => {
// //     const { value, checked } = e.target;
// //     if (checked) {
// //       setSelectedService((prevServices) => [...prevServices, value]);
// //     } else {
// //       setSelectedService((prevServices) => prevServices.filter((service) => service !== value));
// //     }
// //   };

// //   return (
// //     <div className="car-booking-form">
// //       <h2>BOOK NOW</h2>
// //       <form onSubmit={handleSubmit}>
// //         <label htmlFor="name">Name:</label>
// //         <input
// //           type="text"
// //           id="name"
// //           value={name}
// //           onChange={(e) => setName(e.target.value)}
// //           required
// //         />

// //         <label htmlFor="email">Email:</label>
// //         <input
// //           type="email"
// //           id="email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           required
// //         />

// //         <label htmlFor="phone">Phone:</label>
// //         <input
// //           type="tel"
// //           id="phone"
// //           value={phone}
// //           onChange={(e) => setPhone(e.target.value)}
// //           required
// //         />

// //         <label htmlFor="pickupDate">Pickup Date:</label>
// //         <input
// //           type="date"
// //           id="pickupDate"
// //           value={pickupDate}
// //           onChange={(e) => setPickupDate(e.target.value)}
// //           required
// //         />

// //         <label htmlFor="returnDate">Return Date:</label>
// //         <input
// //           type="date"
// //           id="returnDate"
// //           value={returnDate}
// //           onChange={(e) => setReturnDate(e.target.value)}
// //           required
// //         />

// //         <br /><br />
// //         <label htmlFor="serviceAddOns">Service Add-ons:</label>
// //         <div>
// //           <label>
// //             <input
// //               type="checkbox"
// //               value="carWash"
// //               onChange={handleServiceAddOnsChange}
// //             />
// //             Car Wash
// //           </label>
// //           <label>
// //             <input
// //               type="checkbox"
// //               value="interiorCleaning"
// //               onChange={handleServiceAddOnsChange}
// //             />
// //             Interior Cleaning
// //           </label>
// //           <label>
// //             <input
// //               type="checkbox"
// //               value="fluidTopUps"
// //               onChange={handleServiceAddOnsChange}
// //             />
// //             Fluid Top-ups
// //           </label>
// //         </div>

// //         <br />
// //         <label htmlFor="location">Location:</label>
// //         <select
// //           id="location"
// //           value={location}
// //           onChange={(e) => setLocation(e.target.value)}
// //           required
// //         >
// //           <option value="">Select Location</option>
// //           <option value="Sungam, Coimbatore">Sungam, Coimbatore</option>
// //           <option value="Anna Nagar, Chennai">Anna Nagar, Chennai</option>
// //           <option value="Sivaji Nagar, Bangalore">Sivaji Nagar, Bangalore</option>
// //         </select>

// //         <label htmlFor="registrationNumber">Registration Number:</label>
// //         <input
// //           type="text"
// //           id="registrationNumber"
// //           value={registrationNumber}
// //           onChange={(e) => setRegistrationNumber(e.target.value)}
// //           required
// //         />

// //         <label htmlFor="carModel">Car Model:</label>
// //         <select
// //           id="carModel"
// //           value={carModel}
// //           onChange={(e) => setCarModel(e.target.value)}
// //           required
// //         >
// //           <option value="">Select Car Model</option>
// //           {carModels.map((model, index) => (
// //             <option key={index} value={model}>
// //               {model}
// //             </option>
// //           ))}
// //         </select>

// //         <br /><br />
// //         <label htmlFor="emergencyNumber">Emergency Number:</label>
// //         <input
// //           type="number"
// //           id="emergencyNumber"
// //           value={emergencyNumber}
// //           onChange={(e) => setEmergencyNumber(e.target.value)}
// //           required
// //         />

// //         <label htmlFor="numVehicles">Number of Vehicles (Max 1):</label>
// //         <input
// //           type="number"
// //           id="numVehicles"
// //           min="1"
// //           max="1"
// //           value={numVehicles}
// //           onChange={(e) => setNumVehicles(e.target.value)}
// //           required
// //         />

// //         <br /><br />
// //         <label>Select Service:</label>
// //         <div>
// //           {services.map((service) => (
// //             <label key={service.id}>
// //               <input
// //                 type="checkbox"
// //                 value={service.id}
// //                 checked={selectedService.includes(service.id)}
// //                 onChange={handleSelectedServiceChange}
// //               />
// //               {service.label}
// //             </label>
// //           ))}
// //         </div>

// //         <br /><br /><br /><br /><br />
// //         <button  type="submit">Next</button>
       
// //       </form>
// //     </div>
// //   );
// // };

// // export default CarBookingForm;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// import './CarBookingForm.css';

// const CarBookingForm = () => {
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [pickupDate, setPickupDate] = useState('');
//   const [returnDate, setReturnDate] = useState('');
//   const [serviceAddOns, setServiceAddOns] = useState([]);
//   const [selectedService, setSelectedService] = useState([]);

//   const navigate = useNavigate();

//   // Array of car models
//   const carModels = ['Maruti', 'Toyota', 'Honda', 'Hyundai', 'Ford', 'BMW', 'Mercedes', 'Audi'];

//   // List of available services
//   const services = [
//     { id: 'carMaintenance', label: 'CarMaintenance' },
//     { id: 'oil change', label: 'oil change' },
//     { id: 'brake inspection', label: 'Brake inspection' },
//     { id: 'engine tuneup', label: 'engine tune-up' },
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform form submission logic here
//     console.log('Form submitted');
//     navigate('/CostEstimation');
//   };

//   const handleServiceAddOnsChange = (e) => {
//     const { value, checked } = e.target;
//     if (checked) {
//       setServiceAddOns((prevAddOns) => [...prevAddOns, value]);
//     } else {
//       setServiceAddOns((prevAddOns) => prevAddOns.filter((addOn) => addOn !== value));
//     }
//   };

//   const handleSelectedServiceChange = (e) => {
//     const { value, checked } = e.target;
//     if (checked) {
//       setSelectedService((prevServices) => [...prevServices, value]);
//     } else {
//       setSelectedService((prevServices) => prevServices.filter((service) => service !== value));
//     }
//   };

//   return (
//     <div className="car-booking-form">
//       <h2>BOOK NOW</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
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

//         <br /><br />
//         <label htmlFor="serviceAddOns">Service Add-ons:</label>
//         <div>
//           <label>
//             <input
//               type="checkbox"
//               value="carWash"
//               onChange={handleServiceAddOnsChange}
//             />
//             Car Wash
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               value="interiorCleaning"
//               onChange={handleServiceAddOnsChange}
//             />
//             Interior Cleaning
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               value="fluidTopUps"
//               onChange={handleServiceAddOnsChange}
//             />
//             Fluid Top-ups
//           </label>
//         </div>

//         <br />
//         <label>Select Service:</label>
//         <div>
//           {services.map((service) => (
//             <label key={service.id}>
//               <input
//                 type="checkbox"
//                 value={service.id}
//                 checked={selectedService.includes(service.id)}
//                 onChange={handleSelectedServiceChange}
//               />
//               {service.label}
//             </label>
//           ))}
//         </div>

//         <br /><br /><br /><br /><br />
//         <button type="submit">Next</button>
//       </form>
//     </div>
//   );
// };

// export default CarBookingForm;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './CarBookingForm.css';

const CarBookingForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [serviceAddOns, setServiceAddOns] = useState([]);
  const [selectedService, setSelectedService] = useState([]);
  const [carMake, setCarMake] = useState('');
  const [carModel, setCarModel] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');

  const navigate = useNavigate();

  // List of available services
  const services = [
    { id: 'carMaintenance', label: 'CarMaintenance' },
    { id: 'oil change', label: 'Oil Change' },
    { id: 'brake inspection', label: 'Brake Inspection' },
    { id: 'engine tuneup', label: 'Engine Tune-up' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted');
    navigate('/CostEstimation');
  };

  const handleServiceAddOnsChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setServiceAddOns((prevAddOns) => [...prevAddOns, value]);
    } else {
      setServiceAddOns((prevAddOns) => prevAddOns.filter((addOn) => addOn !== value));
    }
  };

  const handleSelectedServiceChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedService((prevServices) => [...prevServices, value]);
    } else {
      setSelectedService((prevServices) => prevServices.filter((service) => service !== value));
    }
  };

  return (
    <div className="car-booking-form">
      <h2>BOOK NOW</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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

        <br /><br />
        <label htmlFor="carMake">Car Make:</label>
        <input
          type="text"
          id="carMake"
          value={carMake}
          onChange={(e) => setCarMake(e.target.value)}
          required
        />

        <label htmlFor="carModel">Car Model:</label>
        <input
          type="text"
          id="carModel"
          value={carModel}
          onChange={(e) => setCarModel(e.target.value)}
          required
        />

        <label htmlFor="registrationNumber">Registration Number:</label>
        <input
          type="text"
          id="registrationNumber"
          value={registrationNumber}
          onChange={(e) => setRegistrationNumber(e.target.value)}
          required
        />

        <br /><br />
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

        <br />
        <label>Select Service:</label>
        <div>
          {services.map((service) => (
            <label key={service.id}>
              <input
                type="checkbox"
                value={service.id}
                checked={selectedService.includes(service.id)}
                onChange={handleSelectedServiceChange}
              />
              {service.label}
            </label>
          ))}
        </div>

        <br /><br /><br /><br /><br />
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default CarBookingForm
