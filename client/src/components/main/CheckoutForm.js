import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    // Call your backend to create the PaymentIntent
    console.log("1111111");
    const { data } = await axios.post(
      "http://35.173.248.65/api/v1/car/reservate",
      {
        amount: 1000,
      }
    ); // Example amount in cents

    const result = await stripe.confirmCardPayment(data.clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      setError(result.error.message);
      setLoading(false);
    } else {
      if (result.paymentIntent.status === "succeeded") {
        console.log("Payment successful!");
        // Handle successful payment here
        setLoading(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <CardElement className="block w-full px-2 py-3 border-2 rounded-md focus:ring-blue-500 focus:border-blue-500 " />
      <button type="submit" disabled={!stripe || loading}>
        Pay
      </button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default CheckoutForm;
