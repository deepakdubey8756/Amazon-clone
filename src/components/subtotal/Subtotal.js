import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subtotal(props) {
  const handlePayment = () => {
    alert("This is just a demo app. So, payment functionality is not availble in it.")
  }
  return (
    <div className="subtotal">
      <p>
        Subtotal ({props.totalItems} items):  <CurrencyFormat
        decimalScale={2}
        value={props.price}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      </p>
      <small className="subtotal_gift">
        <input type="checkbox" />
        This order contains a gift
      </small>
      <button className="subtotal_button" onClick={handlePayment}>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
