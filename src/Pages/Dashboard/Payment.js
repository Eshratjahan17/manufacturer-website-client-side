import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import Loading from '../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(
  "pk_test_51L3R9bFkT84oh3pxNJIvzbDVIBCMSN6ADzqs9gk1iWVGGYzp13JqdNl07KERXkzkJ7gmgM1OpMtf2aIVr7KXbUYQ000guYLvVD"
);

const Payment = () => {
  const {id}=useParams();
   const url = `https://dry-beyond-73074.herokuapp.com/order/${id}`;
   const { data: order, isLoading } = useQuery(["order", id], () =>
     fetch(url, {
       method: "GET",
       headers: {
         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
       },
     }).then((res) => res.json())
   );
   if (isLoading) {
     return <Loading></Loading>;
   }
   
  return (
    <div>
      <h1 className='text-center text-secondary text-2xl'>Order Id{id}</h1>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12 mx-auto">
        <div class="card-body">
          <p className="text-success font-bold">Hello, {order?.name}</p>
          <h2 class="card-title">Please Pay for {order?.tools}</h2>

          <p>Please pay: ${order?.price}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100 ml-12">
        <div class="card-body ">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;