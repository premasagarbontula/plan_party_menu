import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText } from "../redux/searchSlice";

const Header = () => {
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const dispatch = useDispatch();
  return (
    <div className="header">
      <h1>Plan Party Menu</h1>
      <input
        type="search"
        value={searchTerm}
        onChange={(e) => dispatch(setSearchText(e.target.value))}
        placeholder="Search Menu"
        className="search_element"
      />
    </div>
  );
};

export default Header;
