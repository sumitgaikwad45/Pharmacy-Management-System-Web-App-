import React from "react";


import StripeButton from "./StripeButton";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="header">
        <div className="header-block">
          <span>CHECKOUT</span>
        </div>
      </div>
      <div className="item-details-container">
        
        
      </div>
      <div className="total">TOTAL : $648</div>
      <StripeButton price="648" />
    </div>
  );
};

export default Checkout;