import React, { useState, useEffect } from "react";
import DishList from "./DishList";
import { useDispatch, useSelector } from "react-redux";
import { clearSearch } from "../redux/searchSlice";

const MenuCategories = () => {
  const categories = useSelector((state) => state.category);
  const categoryKeys = Object.keys(categories || {});
  const [activeTab, setActiveTab] = useState("");
  const activeCategoryData = categories?.[activeTab]?.data || [];
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const filteredDishes = activeCategoryData.filter((dish) =>
    dish.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (categoryKeys.length && !activeTab) {
      setActiveTab(categoryKeys[0]);
    }
  }, [categoryKeys, activeTab]);

  useEffect(() => {
    dispatch(clearSearch());
  }, [activeTab, dispatch]);

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
        <DishList activeTab={activeTab} activeCategoryData={filteredDishes} />
      </div>
    </div>
  );
};

export default MenuCategories;
