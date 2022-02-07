import React from "react";
import { PayPalButton } from "react-paypal-button-v2";  
export const Buy =()=>{


    return (
        <div>
  <PayPalButton 
    amount="100.00"
  />
        </div>
    )
}