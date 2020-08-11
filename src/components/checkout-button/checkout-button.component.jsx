import React from "react";
import StripeCheckout from "react-stripe-checkout";
const CheckoutButton = ({ price }) => {
  const publishKey =
    "pk_test_51HEy2OJ1oPbnygQB3mQ0dhG2pdr6KF8J6D66CnFHLPAmxMW9dCkV3l6SFuvV4UibrJPqJZYtY1YzeFbrUAYD1niN00emOtHQ2A";
  const priceForStripe = price * 100;
  const onToken = (token) => {
    console.log(token);
    alert("payment successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Melia Store"
      billingAddress
      shippingAddress
      image={require("../../assets/icons/logo.png")}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={token=>onToken(token)}
      stripeKey={publishKey}
    />
  );
};

export default CheckoutButton;
