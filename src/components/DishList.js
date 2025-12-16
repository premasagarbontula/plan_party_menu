import React from "react";
import DishCard from "./DishCard";

const DishList = ({ activeTab, activeCategoryData }) => {
  return (
    <div className="dish-list-container">
      <div className="dish-list-heading-container">
        <h3 className="active-category-heading">{activeTab} Selection</h3>
        <p className="dish-length">Showing {activeCategoryData.length} dishes</p>
      </div>

      <div className="dish-list">
        {activeCategoryData.length === 0 ? (
          <p>No dishes available</p>
        ) : (
          activeCategoryData.map((dishDetails) => (
            <DishCard
              key={dishDetails.id}
              dishDetails={dishDetails}
              activeTab={activeTab}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default DishList;
