import React, { useState } from "react";
import DishList from "./DishList";
import { useSelector } from "react-redux";

const MenuCategories = () => {
  const categories = useSelector((state) => state.category);
  const categoryKeys = Object.keys(categories || {});
  const [activeTab, setActiveTab] = useState(categoryKeys[0] || "");
  const activeCategoryData = categories[activeTab].data;

  function onChangeCategory(categoryName) {
    setActiveTab(categoryName);
  }
  return (
    <div>
      <div className="menu_categories">
        {Object.entries(categories).map(([categoryName, dataObj], index) => (
          <h4
            className={`category_tab ${
              categoryName === activeTab ? "active_category" : ""
            }`}
            onClick={() => onChangeCategory(categoryName)}
            key={categoryName}
          >
            {categoryName}
            <span className="dish_count">({dataObj.count})</span>
          </h4>
        ))}
      </div>
      <div>
        <DishList
          activeTab={activeTab}
          activeCategoryData={activeCategoryData}
        />
      </div>
    </div>
  );
};

export default MenuCategories;
