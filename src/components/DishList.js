import React from "react";
import DishCard from "./DishCard";

const DishList = ({ activeTab, activeCategoryData }) => {
  return (
    <div className="dish_list-container">
      <h3 className="active_category_heading">{activeTab} Selection</h3>
      <div className="dish_list">
        {activeCategoryData.map((dishDetails) => (
          <DishCard
            key={dishDetails.id}
            dishDetails={dishDetails}
            activeTab={activeTab}
          />
        ))}
      </div>
    </div>
  );
};

export default DishList;
