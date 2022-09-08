import React from 'react';
import './Cart.css';
const Cart = ({ cart }) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tex = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = tex + shipping + total;

  return (
    <div className="cart">
      <h4>Order summery</h4>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${total} </p>
      <p>Total Shipping Charge:$ {shipping} </p>
      <p>Tax: ${tex}</p>
      <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>

      <button>Clear Cart</button>
      <button>Review Order</button>
    </div>
  );
};

export default Cart;
