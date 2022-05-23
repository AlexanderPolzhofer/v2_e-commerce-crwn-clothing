import React from "react";
import { useSelector } from "react-redux";
import {
    CardElement,
    useElements,
    useStripe
} from "@stripe/react-stripe-js";
import {
    PaymentFormContainer,
    FormContainer
} from "./payment-form.styles";
import Button, { BUTTON_TYPES } from "../button/Button";
import { selectCartTotal } from "../../store/cart/cart.selector";


const PaymentForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectCartTotal);

    const paymentHandler = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: amount * 100 }),
        }).then((res) => {
            return res.json();
        });

        console.log(response)

    };


    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment:</h2>
                <CardElement />
                <Button buttonType={BUTTON_TYPES.inverted}>Pay now</Button>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm;