import Carousel from "./Carousel";
import { ProductsT } from "../../redux/type";

type Props = {
  product: ProductsT;
  addToFavorite: () => void;
  addToCart: () => void;
};

const ProductCard = (props: Props) => {
  const { addToCart, addToFavorite, product } = props;
  return (
    <div className="xs:border-b border-border-main">
      <Carousel images={product?.images!} />
      <div onClick={addToFavorite}>
        <i
          className={`absolute flex justify-center items-center cursor-pointer top-[36px] lg:right-16 md:right-16 sm:right-3 xs:right-3  rounded-full w-[36px] h-[36px] bg-[#ABC8C8] opacity-60 fi fi-sr-heart ${
            product?.isFavorite ? "text-red-700" : "text-white"
          } `}></i>
      </div>
      <div className="px-[18.5px]">
        <div className="flex justify-between mb-[9px]">
          <h4 className="text-[16px] font-bold capitalize">{product?.title}</h4>
          <div className="flex  items-end gap-1">
            <p className="text-[16px]  font-[600] text-green">
              {product?.rank}
            </p>
            <i className="fi fi-sr-star text-[14px] text-green"></i>
          </div>
        </div>
        <p className="text-[16px] font-bold text-purple mb-[24px]">
          AED {product?.price}
        </p>
        <p className="text-[12px] text-[#2F333399] mb-[32px]">
          {product?.description?.slice(0, 37)}...
        </p>
        <button
          onClick={addToCart}
          disabled={product?.isSelected}
          className="w-full mb-[14px] rounded-[6px] bg-purple text-white capitalize h-[38px] disabled:bg-gray disabled:cursor-not-allowed">
          Add Meal
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
