import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";
import "./CartItem.css";

function CartItem({ onContinueShopping }) {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  // Calculate total amount for all items
  const calculateTotalAmount = () => {
    return cartItems
      .reduce((total, item) => {
        return total + item.cost * item.quantity;
      }, 0)
      .toFixed(2);
  };

  // Continue shopping
  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };

  // Checkout
  const handleCheckoutShopping = (e) => {
    alert("Functionality to be added for future reference");
  };

  // Increment quantity
  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity + 1,
      })
    );
  };

  // Decrement quantity
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          name: item.name,
          quantity: item.quantity - 1,
        })
      );
    } else {
      dispatch(removeItem(item.name));
    }
  };

  // Remove item completely
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // Calculate subtotal for single item
  const calculateTotalCost = (item) => {
    return (item.cost * item.quantity).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2>Total Cart Amount: ${calculateTotalAmount()}</h2>

      {cartItems.length === 0 ? (
        <h3>Your cart is empty</h3>
      ) : (
        cartItems.map((item, index) => (
          <div className="cart-item" key={index}>
            <img
              className="cart-item-image"
              src={item.image}
              alt={item.name}
            />

            <div className="cart-item-details">
              <h3>{item.name}</h3>

              <p>${item.cost}</p>

              <div className="cart-buttons">
                <button onClick={() => handleDecrement(item)}>-</button>

                <span>{item.quantity}</span>

                <button onClick={() => handleIncrement(item)}>+</button>
              </div>

              <p>Total: ${calculateTotalCost(item)}</p>

              <button
                className="delete-button"
                onClick={() => handleRemove(item)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}

      <div className="cart-actions">
        <button onClick={handleContinueShopping}>
          Continue Shopping
        </button>

        <button onClick={handleCheckoutShopping}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartItem;