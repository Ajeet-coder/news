import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newsType: "arts",
};

const SelectnewsType = createSlice({
  name: "SelectnewsType",
  initialState: initialState,

  reducers: {
    updateNewsType(state = initialState, action) {
      console.log("update imagetype called ");
      state.newsType = action.payload;
    },
  },
});

export const { updateNewsType } = SelectnewsType.actions;
export default SelectnewsType.reducer;
