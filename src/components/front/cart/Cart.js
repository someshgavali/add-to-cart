import React from "react";
import "./Cart.css";
const Cart = ({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
}) => {
  const totalprice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <div className="cart-items">
      <h2 className="cart-items-header"> Cart Items</h2>
      <div className="clear-cart">
        {cartItems.length >= 1 && (
          <button className="clear-cart-button" onClick={handleCartClearance}>
            Clear Cart
          </button>
        )}
      </div>
      {cartItems.length === 0 && (
        <div className="cart-items-empty">No Item are Added in tha Cart</div>
      )}

      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-items-list">
            <img
              className="cart-items-image"
              src={item.image}
              alt={item.name}
            />
            <div className="cart-items-name">{item.name}</div>
            <div className="cart-item-function">
              <button
                className="cart-items-add"
                onClick={() => handleAddProduct(item)}
              >
                +
              </button>
              <button
                className="cart-items-remove"
                onClick={() => handleRemoveProduct(item)}
              >
                -
              </button>
            </div>
            <div className="carts-items-price">
              {item.quantity} * ${item.price}
            </div>
          </div>
        ))}
      </div>
      <div className="cart-items-total-price-name">
        Total price
        <div className="cart-items-total-price">${totalprice}</div>
      </div>
    </div>
  );
};

export default Cart;
