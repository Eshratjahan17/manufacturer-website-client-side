import React from 'react';
import { useParams } from 'react-router';

const Payment = () => {
  const {id}=useParams()
  return (
    <div>
      <h1>Order Id{id}</h1>
    </div>
  );
};

export default Payment;