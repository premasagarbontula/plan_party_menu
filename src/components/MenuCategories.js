import React, { useState } from "react";
import DishList from "./DishList";
import dummyData from "../assets/dummy_data";

const categories = ["Starter", "Main Course", "Dessert", "Classic"];
const MenuCategories = () => {
  const [activeTab, setActiveTab] = useState(categories[0]);
  function onChangeCategory(categoryName) {
    const tab = categories.find((category) => category === categoryName);
    setActiveTab(tab);
  }
  return (
    <div>
      <div className="menu_categories">
        {categories.map((categoryName, index) => (
          <h4
            className={`category_tab ${
              categoryName === activeTab ? "active_category" : ""
            }`}
            onClick={() => onChangeCategory(categoryName)}
            key={index}
          >
            {categoryName}
          </h4>
        ))}
      </div>
      <div>
        <DishList activeTab={activeTab} />
      </div>
    </div>
  );
};

export default MenuCategories;
