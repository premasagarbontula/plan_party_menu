import { createSlice } from "@reduxjs/toolkit";
import dummyData from "../assets/dummy_data";
const categories = {
  Starter: { count: 0, data: dummyData.slice(0, 5), addedDishIds: [] },
  "Main Course": { count: 0, data: dummyData.slice(5, 9), addedDishIds: [] },
  Dessert: { count: 0, data: dummyData.slice(9, 15), addedDishIds: [] },
  Classic: { count: 0, data: dummyData.slice(15, 18), addedDishIds: [] },
  Drinks: { count: 0, data: [], addedDishIds: [] },
};

const categorySlice = createSlice({
  name: "category",
  initialState: categories,
  reducers: {
    categoryCountIncrement: (state, action) => {
      const { categoryName, dishId } = action.payload;
      if (!state[categoryName].addedDishIds.includes(dishId)) {
        state[categoryName].count += 1;
        state[categoryName].addedDishIds.push(dishId);
      }
    },
    categoryCountDecrement: (state, action) => {
      const { categoryName, dishId } = action.payload;
      state[categoryName].count -= 1;
      state[categoryName].addedDishIds = state[
        categoryName
      ].addedDishIds.filter((id) => id !== dishId);
    },
    clearCart: (state, action) => {
      Object.values(state).forEach((category) => {
        category.count = 0;
        category.addedDishIds = [];
      });
    },
  },
});

export const { categoryCountIncrement, categoryCountDecrement, clearCart } =
  categorySlice.actions;
export default categorySlice.reducer;
