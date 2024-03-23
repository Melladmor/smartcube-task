import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const scrollTabsSlice = createSlice({
  name: "scrollTabsSlice",
  initialState: {
    currentTab: 0,
  },
  reducers: {
    setCurrentTab: (state, action: PayloadAction<number>) => {
      state.currentTab = action.payload;
    },
  },
});

export const selectCurrentTab = (state: RootState) => state.scrollTabsSlice;

export const { setCurrentTab } = scrollTabsSlice.actions;
export default scrollTabsSlice.reducer;
