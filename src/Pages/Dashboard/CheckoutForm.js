import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({order}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState();
  const [success,setSuccess]=useState("");
  const [transactionId, setTransactionId] = useState("");
  const[clientSecret,setClientSecret]=useState('');
  const { price,name,email } = order;
  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // "authorization": `Bearer ${localStorage.getItem(`accessToken`)}`,
      },
      body:JSON.stringify({price})
    })
      .then((res) => res.json())
      .then((data) => {
        if(data?.clientSecret){
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);

 console.log(order);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    setCardError(error?.message || "");
    setSuccess("");
    //confirm
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret,
         {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email:email
          },
        },
      });
      if(intentError){
        setCardError(intentError?.message)
      }else{
        setCardError("");
        console.log(paymentIntent);
        setTransactionId(paymentIntent.id);
        setSuccess("Congrats!!")
      }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button type="submit" className='btn btn-secondary btn-sm mt-4' disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500">{cardError}</p>}
      {success && <p className="text-green-500 font-bold mt-5 text-center">
        {success}
        <p className='text-secondary font-bold'>Your Transaction id:{transactionId}</p>
        </p>}
    </div>
  );
};

export default CheckoutForm;