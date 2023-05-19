import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

const SearchedValue = createSlice({
  name: "SearchedValue",
  initialState: initialState,

  reducers: {
    addSearchNewsValue(state = initialState, action) {
      console.log("update news called ");
      state.value = action.payload;
    },
  },
});

export const { addSearchNewsValue } = SearchedValue.actions;
export default SearchedValue.reducer;
