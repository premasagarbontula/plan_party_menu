import React from "react";
import DishCard from "./DishCard";

const DishList = ({ activeTab, activeCategoryData }) => {
  return (
    <div className="dish_list-container">
      <div className="dish_list_heading_container">
        <h3 className="active_category_heading">{activeTab} Selection</h3>
        <p className="dish_length">Showing {activeCategoryData.length} dishes</p>
      </div>

      <div className="dish_list">
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
