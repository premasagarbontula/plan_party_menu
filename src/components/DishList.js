import React from "react";
import dummyData from "../assets/dummy_data";
import DishCard from "./DishCard";

const DishList = ({ activeTab }) => {
  return (
    <div className="dish_list-container">
      <h3 className="active_category_heading">{activeTab} Selection</h3>
      <div className="dish_list">
        {dummyData.map((dishDetails) => (
          <DishCard key={dishDetails.id} dishDetails={dishDetails} />
        ))}
      </div>
    </div>
  );
};

export default DishList;
