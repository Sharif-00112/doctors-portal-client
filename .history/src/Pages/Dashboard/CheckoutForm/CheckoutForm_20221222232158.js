import { Alert } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth'

// https://github.com/stripe/react-stripe-js/blob/master/examples/hooks/0-Card-Minimal.js

const CheckoutForm = ({ appointment }) => {
    const {price, patientName} = appointment;
    const {user} = useAuth();
    // console.log(price);

    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState();

    useEffect( () =>{
        fetch('http://localhost:3005/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({price: 999})
            //use price dynamically. i've used 999 to avoid error
        })
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => setClientSecret(data.clientSecret))
    },[price])   
    // console.log(clientSecret)  

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) =>{
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
    
        if (error) {
            console.log('[error]', error);
            setError(error.message);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('');
        }

        // payment intent
        const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: patientName,
                  email: user.email
                },
              },
            },
        );

        if(intentError){
            setError(intentError.message);
        }
        else{
            setError('');
            console.log(paymentIntent);
        }
    };

    return (
        <div>
            {/* <h2>Hello</h2> */}
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                    style: {
                        base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                            color: '#aab7c4',
                        },
                        },
                        invalid: {
                        color: '#9e2146',
                        },
                    },
                    }}
                />
                <button type="submit" disabled={!stripe}>
                    Pay ${price}
                </button>
            </form>
            {
                error && <Alert sx={{my:3}} severity="error">{error}</Alert>
            }
        </div>
    );
};

export default CheckoutForm;