import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const categories = useSelector((state) => state.category);
  const totalDishCount = Object.values(categories).reduce((acc, curr) => {
    return acc + curr.count;
  }, 0);
  const totalValue = Object.values(categories).reduce((acc, curr) => {
    let addedIds = curr.addedDishIds;
    let sum = 0;
    for (let id of addedIds) {
      sum += id;
    }
    return acc + sum * 10;
  }, 0);
  return (
    <div className="cart-container">
      <div className="cart-sub-container">
        <div>
          <h5 className="cart-heading">SELECTED ITEMS</h5>
          <p>
            <span className="cart-span">{totalDishCount}</span> dishes
          </p>
        </div>
        <hr className="separator" />
        <div>
          <h5 className="cart-heading">ESTIMATED TOTAL</h5>
          <p className="cart-span">${totalValue}</p>
        </div>
      </div>
      <button className="continue-btn">Continue</button>
    </div>
  );
};

export default Cart;
