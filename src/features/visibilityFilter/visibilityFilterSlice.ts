import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum VisibilityFilter {
  showAll = "SHOW_ALL",
  showCompleted = "SHOW_COMPLETED",
  showActive = "SHOW_ACTIVE",
}

const initialState = VisibilityFilter.showAll;

const visibilityFilterSlice = createSlice({
  name: "visibilityFilter",
  initialState,
  reducers: {
    setVisibilityFilter(state, action: PayloadAction<VisibilityFilter>) {
      return action.payload;
    },
  },
});

export const { setVisibilityFilter } = visibilityFilterSlice.actions;

export default visibilityFilterSlice.reducer;
