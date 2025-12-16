import { useDispatch, useSelector } from "react-redux";
import {
  categoryCountIncrement,
  categoryCountDecrement,
} from "../redux/categorySlice";

const DishCard = ({ dishDetails, activeTab }) => {
  const { id, name, description, category } = dishDetails;
  const image = category.image;
  const price = id * 10;
  const addedDishIds = useSelector(
    (state) => state.category[activeTab].addedDishIds
  );
  const isAdded = addedDishIds.includes(dishDetails.id);

  const dispatch = useDispatch();
  return (
    <div className="dish-card">
      <img src={image} alt={name} className="dish-image" />
      <div>
        <h3 className="dish-name">{name}</h3>
        <h4 className="dish-price">$ {price}</h4>
        <p className="dish-desc">{description}</p>
        {!isAdded ? (
          <button
            className="add-button"
            onClick={() =>
              dispatch(
                categoryCountIncrement({ categoryName: activeTab, dishId: id })
              )
            }
          >
            Add+
          </button>
        ) : (
          <button
            className="remove-button"
            onClick={() =>
              dispatch(
                categoryCountDecrement({ categoryName: activeTab, dishId: id })
              )
            }
          >
            Remove-
          </button>
        )}
      </div>
    </div>
  );
};

export default DishCard;
