import React, { useState, useEffect } from 'react';
import './CostEstimation.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const CostEstimation = ({ selectedService, serviceAddOns }) => {
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    calculateTotalCost();
  }, [selectedService, serviceAddOns]);

  const navigate = useNavigate();

  const calculateTotalCost = () => {
    let baseCost = 1000;
    let addOnsCost = 800;

    if (selectedService && selectedService.length === 1) {
      baseCost = 300;
    }

    if (serviceAddOns && serviceAddOns.length > 0) {
      addOnsCost = serviceAddOns.length * 200;
    }

    const total = baseCost + addOnsCost;
    setTotalCost(total);
  };

  const handlePay = () => {
    navigate('/PaymentPage');
  };

  return (
    <div>
      <Navbar />
      <div className="cost-estimation-container">
        <div className="cost-estimation">
          <h2>Cost Estimation</h2>
          <br/>
          <p>Selected Service: 1000{selectedService && selectedService.join(', ')}</p>
          <p>Selected Add-ons: 800{serviceAddOns && serviceAddOns.join(', ')}</p>
          <br/>
          <h3>Total Cost: {totalCost} Rs</h3>
          
          <button onClick={handlePay} className="pay-now-button">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CostEstimation;
// import React, { useState, useEffect } from 'react';
// import './CostEstimation.css';
// import { useNavigate } from 'react-router-dom';

// const CostEstimation = ({service, addonn}) => {
//   // const [totalCost, setTotalCost] = useState(0);

//   // useEffect(() => {
//   //   calculateTotalCost();
//   // }, [selectedService, serviceAddOns]);

//   const navigate = useNavigate();

//   // const calculateTotalCost = () => {
//   //   let baseCost = 500;
//   //   let addOnsCost = 300;

//   //   if (selectedService && selectedService.length > 0) {
//   //     baseCost = selectedService.length * 300;
//   //   }

//   //   if (serviceAddOns && serviceAddOns.length > 0) {
//   //     addOnsCost = serviceAddOns.length * 200;
//   //   }

//   //   const total = baseCost + addOnsCost;
//   //   setTotalCost(total);
//   // };

//    const handlePay = () => {
//      navigate('/PaymentPage');
//    };

//   console.log("hey");
//   console.log(service);
//   console.log(addonn);
//   const cost = (600*service)+(300*addonn);

//   return (
//     <div className="cost-estimation">
//       <center>
//         <h2>VEHICLE SERVICE CHECK</h2>
//       </center><br></br><br></br>
//       <center> {/* Center the content of the form */}
//         <p>Selected Service: {service}</p>
//         <p>Selected Add-ons: {addonn} </p>
//         <h3>Total Cost: {cost} Rs</h3>
//         <br></br><br></br><br></br>
//         <button onClick={handlePay} className="pay-now-button">
//           Pay Now
//         </button>
//       </center>
//     </div>
//   );
// };

// export default CostEstimation;