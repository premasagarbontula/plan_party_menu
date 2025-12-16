import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: { searchTerm: "" },
  reducers: {
    setSearchText: (state, action) => {
      state.searchTerm = action.payload;
    },
    clearSearch: (state, action) => {
      state.searchTerm = "";
    },
  },
});

export const { setSearchText, clearSearch } = searchSlice.actions;
export default searchSlice.reducer;
