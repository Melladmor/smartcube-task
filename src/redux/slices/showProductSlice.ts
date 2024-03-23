import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ProductsT } from "../type";

type ShowProductSlice = {
  show: boolean;
  product: {
    product: ProductsT | null;
    cat_id: number | null;
  };
};
const initialState: ShowProductSlice = {
  show: false,
  product: {
    product: null,
    cat_id: null,
  },
};
const showProductSlice = createSlice({
  name: "showProductSlice",
  initialState,
  reducers: {
    showProduct: (
      state,
      action: PayloadAction<{
        products: ProductsT;
        cat_id: number;
      }>
    ) => {
      state.show = true;
      state.product = {
        cat_id: action.payload?.cat_id,
        product: action?.payload?.products,
      };
    },
    hideProduct: (state) => {
      state.show = false;
      state.product = {
        cat_id: null,
        product: null,
      };
    },
  },
});

export const selectShowProductSlice = (state: RootState) =>
  state.showProductSlice;

export const { showProduct, hideProduct } = showProductSlice.actions;
export default showProductSlice.reducer;
