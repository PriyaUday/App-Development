// import React, { useState } from 'react';

// function PaymentPage() {
//   const [paymentStatus, setPaymentStatus] = useState(null);

//   const handlePayment = (event) => {
//     event.preventDefault();
//     // Simulating payment processing
//     setTimeout(() => {
//       setPaymentStatus('success');
//     }, 2000);
//   };

//   const renderPaymentStatus = () => {
//     if (paymentStatus === 'success') {
//       return <p>Payment Successful!</p>;
//     }
//     return null;
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: '100vh',
//       }}
//     >
//       <h1>Payment Page</h1>
//       <form
//         onSubmit={handlePayment}
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Card Number"
//           style={{ margin: '10px', padding: '5px' }}
//         />
//         <input
//           type="text"
//           placeholder="Expiry Date"
//           style={{ margin: '10px', padding: '5px' }}
//         />
//         <input
//           type="text"
//           placeholder="CVV"
//           style={{ margin: '10px', padding: '5px' }}
//         />
//         <div style={{ display: 'flex', flexDirection: 'column' }}>
//           <label>
//             <input
//               type="radio"
//               name="paymentOption"
//               value="card"
//               required
//             />
//             Card Payment
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="paymentOption"
//               value="cod"
//               required
//             />
//             Cash on Delivery
//           </label>
//         </div>
//         <button
//           type="submit"
//           style={{
//             margin: '10px',
//             padding: '10px 20px',
//             backgroundColor: '#007bff',
//             color: 'white',
//             border: 'none',
//             borderRadius: '4px',
//             cursor: 'pointer',
//           }}
//         >
//           Pay Now
//         </button>
//       </form>
//       {renderPaymentStatus()}
//     </div>
//   );
// }

// export default PaymentPage;
import React, { useState } from 'react';
import './PaymentPage.css';
import Navbar from './Navbar';
function PaymentPage() {
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePayment = (event) => {
    event.preventDefault();
    // Simulating payment processing
    setTimeout(() => {
      setPaymentStatus('success');
    }, 2000);
  };

  const renderPaymentStatus = () => {
    if (paymentStatus === 'success') {
      return <p>Payment Successful!</p>;
    }
    return null;
  };

  return (
    <div>
    <Navbar/>
    <div className="payment-container">
      <h1>Payment Page</h1>
      <form onSubmit={handlePayment} className="payment-form">
        <input
          type="text"
          placeholder="Card Number"
          className="payment-input"
        />
        <input
          type="text"
          placeholder="Expiry Date"
          className="payment-input"
        />
        <input
          type="text"
          placeholder="CVV"
          className="payment-input"
        />
        <div className="payment-options">
          <label>
            <input
              type="radio"
              name="paymentOption"
              value="card"
              required
            />
            Card Payment
          </label>
          <label>
            <input
              type="radio"
              name="paymentOption"
              value="cod"
              required
            />
            Cash on Delivery
          </label>
        </div>
        <button
          type="submit"
          className="pay-now-button"
        >
          Pay Now
        </button>
      </form>
      {renderPaymentStatus()}
    </div>
    </div>
  );
}

export default PaymentPage;
// import React, { useState } from 'react';
// import './PaymentPage.css';


// function PaymentPage() {
//   const [paymentStatus, setPaymentStatus] = useState(null);
//   const [paymentOption, setPaymentOption] = useState('card'); // Default to 'card' payment
  





//   const handleCardPayment = (event) => {
//     event.preventDefault();
//     // Simulating card payment processing
//     setTimeout(() => {
//       setPaymentStatus('success');
//     }, 2000);
//   };

//   const handleCashOnDelivery = (event) => {
//     event.preventDefault();
//     // Simulating cash on delivery processing
//     setPaymentStatus('success');
//   };

//   const renderPaymentStatus = () => {
//     if (paymentStatus === 'success') {
//       return <p>Payment Successful!</p>;
//     }
//     return null;
//   };

//   const handlePaymentOptionChange = (event) => {
//     setPaymentOption(event.target.value);
//   };



//   return (
//     <div className="payment-page">
//       <h1>PAY HERE!</h1><br></br><br></br>
//       <div className="payment-options">
//         <label>
//           <input
//             type="radio"
//             name="paymentOption"
//             value="card"
//             checked={paymentOption === 'card'}
//             onChange={handlePaymentOptionChange}
//             required
//           />
//           Card Payment
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="paymentOption"
//             value="cod"
//             checked={paymentOption === 'cod'}
//             onChange={handlePaymentOptionChange}
//             required
//           />
//           Cash on Delivery
//         </label>
//       </div>
//       {paymentOption === 'card' && (
//         <form onSubmit={handleCardPayment}>
//           {/* Card payment form inputs */}
//           <input
//             type="text"
//             placeholder="Card Number"
//             className="payment-input"
//             pattern="[0-9]{16}"
//             title="Card number should be a 16-digit number."
//             required={paymentOption === 'card'}
//           />
//           <input
//             type="text"
//             placeholder="Expiry Date (MM/YY)"
//             className="payment-input"
//             pattern="(0[1-9]|1[0-2])\/[0-9]{2}"
//             title="Expiry date should be in the format MM/YY."
//             required={paymentOption === 'card'}
//           />
//           <input
//             type="text"
//             placeholder="CVV"
//             className="payment-input"
//             pattern="[0-9]{3}"
//             title="CVV should be a 3-digit number."
//             required={paymentOption === 'card'}
//           />
//           <center> {/* Center the button */}
//             <button type="submit" className="payment-button">
//               Submit Card Payment
//             </button>
//           </center>
//         </form>
//       )}
//       {paymentOption === 'cod' && (
//         <form onSubmit={handleCashOnDelivery}>
//           {/* Cash on delivery form inputs (if needed) */}
//           <button type="submit" className="payment-button">
//           Submit
//           </button>
//         </form>
//       )}
//       {renderPaymentStatus()}
//     </div>
//   );
// }

// export default PaymentPage;