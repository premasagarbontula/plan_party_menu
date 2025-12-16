import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import searchSlice from "./searchSlice";

export const store = configureStore({
  reducer: {
    category: categorySlice,
    search: searchSlice,
  },
});
