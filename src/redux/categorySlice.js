import { createSlice } from "@reduxjs/toolkit";
import dummyData from "../assets/dummy_data";
const categories = {
  Starter: { count: 0, data: dummyData.slice(0, 5), addedDishIds: [] },
  "Main Course": { count: 0, data: dummyData.slice(5, 10), addedDishIds: [] },
  Dessert: { count: 0, data: dummyData.slice(10, 15), addedDishIds: [] },
  Classic: { count: 0, data: dummyData.slice(15, 20), addedDishIds: [] },
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
  },
});

export const { categoryCountIncrement, categoryCountDecrement } =
  categorySlice.actions;
export default categorySlice.reducer;
