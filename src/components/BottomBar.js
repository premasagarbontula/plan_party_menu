import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const BottomBar = () => {
  const navigate = useNavigate();
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
    totalDishCount > 0 && (
      <div className="bottom-container">
        <div className="bottom-sub-container">
          <div>
            <h5 className="bottom-heading">SELECTED ITEMS</h5>
            <p>
              <span className="bottom-span">{totalDishCount}</span> dishes
            </p>
          </div>
          <hr className="separator" />
          <div>
            <h5 className="bottom-heading">ESTIMATED TOTAL</h5>
            <p className="bottom-span">${totalValue}</p>
          </div>
        </div>

        <button className="continue-btn" onClick={() => navigate("/cart")}>
          Continue
        </button>
      </div>
    )
  );
};

export default BottomBar;
