import { configureStore } from "@reduxjs/toolkit";
import stepsSlice from "./slices/stepsSlice";
import categoresSlice from "./slices/categoresSlice";
import scrollTabsSlice from "./slices/scrollTabsSlice";
import showProductSlice from "./slices/showProductSlice";

const store = configureStore({
  reducer: {
    stepsSlice: stepsSlice,
    categoresSlice: categoresSlice,
    scrollTabsSlice: scrollTabsSlice,
    showProductSlice: showProductSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
