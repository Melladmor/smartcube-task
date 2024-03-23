import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addToCart, CartT, CategoryI, ImageT, ProductsT } from "../type";
import { RootState } from "../store";
const imageDummyData: ImageT[] = [
  { id: 1, url: "./assets/images/hummus.jpeg" },
  { id: 2, url: "./assets/images/hummus.jpeg" },
  { id: 3, url: "./assets/images/hummus.jpeg" },
  { id: 4, url: "./assets/images/hummus.jpeg" },
  { id: 5, url: "./assets/images/hummus.jpeg" },
];

const generateProducts = (categoryId: number, length: number): ProductsT[] => {
  return Array.from({ length }, (_, index) => ({
    id: categoryId * 10 + index + 1,
    images: imageDummyData,
    title: `Product ${index + 1}`,
    price: Math.floor(Math.random() * 100) + 10,
    rank: Math.floor(Math.random() * 5) + 1,
    description: `Description for Product ${index + 1}`,
    isFavorite: Math.random() < 0.5,
    isSelected: false,
  }));
};

const categoriesDummyData: CategoryI[] = [
  {
    id: 1,
    title: "Cold Appetizers",
    products: generateProducts(1, 2),
  },
  {
    id: 2,
    title: "Hot Appetizers",
    products: generateProducts(2, 5),
  },
  {
    id: 3,
    title: "Soup",
    products: generateProducts(3, 10),
  },
  {
    id: 4,
    title: "Sandwiches",
    products: generateProducts(4, 5),
  },
  {
    id: 5,
    title: "Plate",
    products: generateProducts(5, 6),
  },
];

type initialStateT = {
  categoreis: CategoryI[];
  cart: CartT[] | [];
  showCart: boolean;
};
const initialState: initialStateT = {
  categoreis: categoriesDummyData,
  cart: [],
  showCart: false,
};

const categoresSlice = createSlice({
  name: "categoresSlice",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<addToCart>) => {
      const { cat_id, product_id } = action.payload;
      const filterCategroy = state.categoreis.find(
        (el: CategoryI) => el?.id === action.payload.cat_id
      );
      const updatedCategories = state.categoreis.map((category) => {
        if (category.id === cat_id) {
          const updatedProducts = category.products.map((product) => {
            if (product.id === product_id) {
              return {
                ...product,
                isSelected: true,
              };
            }
            return product;
          });

          return {
            ...category,
            products: updatedProducts,
          };
        }
        return category;
      });

      if (filterCategroy) {
        const filterProduct: any = filterCategroy?.products?.find(
          (el: ProductsT) => el?.id === product_id
        );
        const productToAdd = {
          ...filterProduct,
          isSelected: true,
          cat_id: cat_id,
        };

        state.cart = [...state.cart, productToAdd];
        state.categoreis = updatedCategories;
      }
    },
    deleteProductFromCart: (state, action: PayloadAction<addToCart>) => {
      const { cat_id, product_id } = action.payload;
      const category = state.categoreis.find(
        (category: CategoryI) => category.id === cat_id
      );
      const findProduct = category?.products.find(
        (product: ProductsT) => product?.id === product_id
      );

      if (findProduct) {
        const filterCart = state.cart.filter(
          (product: ProductsT) => product?.id !== findProduct?.id
        );
        const updatedCategories = state.categoreis.map((category) => {
          if (category.id === cat_id) {
            const updatedProducts = category.products.map((product) => {
              if (product.id === product_id) {
                return {
                  ...product,
                  isSelected: false,
                };
              }
              return product;
            });

            return {
              ...category,
              products: updatedProducts,
            };
          }
          return category;
        });
        state.cart = filterCart;
        state.categoreis = updatedCategories;
      }
    },
    addProductToFavorite: (state, action: PayloadAction<addToCart>) => {
      const { cat_id, product_id } = action.payload;
      const checkIfAdded = state.categoreis.find(
        (category) => category.id === cat_id
      );
      const checkIfChange = checkIfAdded?.products.find(
        (product) => product?.id === product_id
      );
      const updatedCategories = state.categoreis.map((category) => {
        if (category.id === cat_id) {
          const updatedProducts = category.products.map((product) => {
            if (
              product.id === product_id &&
              checkIfChange?.isFavorite === false
            ) {
              return {
                ...product,
                isFavorite: true,
              };
            } else {
              return {
                ...product,
                isFavorite: false,
              };
            }
          });

          return {
            ...category,
            products: updatedProducts,
          };
        }
        return category;
      });

      if (updatedCategories) {
        state.categoreis = updatedCategories;
      }
    },
    showAndHideCart: (state, action: PayloadAction<boolean>) => {
      state.showCart = action.payload;
    },
  },
});

export const {
  addProductToCart,
  deleteProductFromCart,
  addProductToFavorite,
  showAndHideCart,
} = categoresSlice.actions;
export const selectCategories = (state: RootState) => state.categoresSlice;
export default categoresSlice.reducer;
