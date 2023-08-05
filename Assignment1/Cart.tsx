import React from "react";

const CartScreen = () => {
  const items = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 15 },
    { id: 3, name: "Product 3", price: 20 },
  ];

  const renderItems = () => {
    return items.map((item) => (
      <div key={item.id}>
        <span>{item.name}</span>
        <span>${item.price}</span>
      </div>
    ));
  };

  const calculateTotal = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.price;
    });
    return total;
  };

  return (
    <div style={{ background: "linear-gradient(to bottom, #ffffff, #f2f2f2)" }}>
      <h2 style={{ color: "green" }}>Cart Screen</h2>
      <div>{renderItems()}</div>
      <h3>Total: ${calculateTotal()}</h3>
      <button style={{ background: "linear-gradient(to bottom, #4CAF50, #398A46)", color: "white" }}>Checkout</button>
    </div>
  );
};

export default CartScreen;