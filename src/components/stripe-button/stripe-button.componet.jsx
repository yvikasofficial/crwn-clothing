import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51I0X2AAjTC5506QUpH01YrYFqtvT7K7qmn666tMMdaLlFWWAXSSxsRkYwZuTMFfgSpDo9HdRJoh4nlkkD4kJhoXK00JUqXyhxr";

  const onToken = (token) => {
    console.log(token);
    alert("Login Successful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      shippingAddress
      billingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
