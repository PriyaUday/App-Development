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
    let baseCost = 0;
    let addOnsCost = 0;

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
          <p>Selected Service: {selectedService && selectedService.join(', ')}</p>
          <p>Selected Add-ons: {serviceAddOns && serviceAddOns.join(', ')}</p>
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
