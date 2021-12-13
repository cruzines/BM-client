import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./Stripe.css";
import { API_URL } from "../config";

const stripePromise = loadStripe('pk_test_51K5rplFxwKKTQ3RSDxokOAY1PC41OHTJKciaob6lLK4kTrRsbQ984HXiA9OMf3GiOE5yjbf82KkHevxtCXnKjlUw00YBCpzfxS');

export default function App() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    const getData = async () => {
        let res = await fetch(`${API_URL}/create-payment-intent`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
          })
        let data = await res.json();
        setClientSecret(data.clientSecret)
    }

    getData()
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}