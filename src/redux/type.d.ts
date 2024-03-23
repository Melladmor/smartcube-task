export type StepT = {
  id: number;
};

export type ImageT = {
  id: number;
  url: string;
};
export type ProductsT = {
  id: number;
  images: ImageT[];
  title: string;
  price: number;
  rank: number;
  description: string;
  isFavorite: boolean;
  isSelected: boolean;
};

export interface CategoryI {
  id: number;
  title: string;
  products: ProductsT[];
}

export interface addToCart {
  cat_id: number;
  product_id: number;
}

export interface CartT extends ProductsT {
  cat_id: number;
}
