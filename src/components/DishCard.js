import React from "react";

const DishCard = ({ dishDetails }) => {
  const { id, name, description, category } = dishDetails;
  const image = category.image;
  const price = Math.floor(Math.random() * 1000);

  return (
    <div className="dish_card">
      <img src={image} alt={name} className="dish_image" />
      <div>
        <h3 className="dish_name">{name}</h3>
        <h4 className="dish_price">Rs {price}</h4>
        <p className="dish_desc">{description}</p>
        <button className="button">Add to menu</button>
      </div>
    </div>
  );
};

export default DishCard;
