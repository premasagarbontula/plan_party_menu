import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText } from "../redux/searchSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="header">
      <h1 onClick={() => navigate("/")}>Plan Party Menu</h1>
      <input
        type="search"
        value={searchTerm}
        onChange={(e) => dispatch(setSearchText(e.target.value))}
        placeholder="Search Menu"
        className="search-element"
      />
    </div>
  );
};

export default Header;
