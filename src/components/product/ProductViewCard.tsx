import Carousel from "./Carousel";
import { CategoryI, ProductsT } from "../../redux/type";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToFavorite,
  selectCategories,
} from "../../redux/slices/categoresSlice";
import ProductCard from "./ProductCard";
import Drawer from "../Drawer/Drawer";
import { hideProduct } from "../../redux/slices/showProductSlice";
import useMediaQuery from "../../hooks/useMediaQuery";

type Props = {
  product_id: number;
  cat_id: number;
  onClick: () => void;
  onClose: () => void;
  className?: string;
  open?: boolean;
};

const ProductViewCard = (props: Props) => {
  const { onClose, className, cat_id, product_id, onClick, open } = props;
  const isSmallScreen = useMediaQuery("(max-width: 640px)");

  const dispatch = useDispatch();
  const category = useSelector(selectCategories).categoreis;
  const filterdCategory = category?.find((cat: CategoryI) => cat?.id == cat_id);
  const product = filterdCategory?.products?.find(
    (product: ProductsT) => product?.id == product_id
  );

  console.log({ isSmallScreen });

  return (
    <>
      {isSmallScreen ? (
        <Drawer
          title={product?.title!}
          isOpen={open!}
          onClose={() => dispatch(hideProduct())}>
          <ProductCard
            product={product!}
            addToCart={() => onClick()}
            addToFavorite={() =>
              dispatch(
                addProductToFavorite({
                  cat_id: cat_id,
                  product_id,
                })
              )
            }
          />
        </Drawer>
      ) : (
        <div
          className={` w-[375px] h-[375px]  ${className} rounded-tl-[12px] rounded-tr-[12px]`}>
          <div
            className="bg-white relative z-10 min-h-[400px] rounded-tr-[12px] rounded-tl-[12px]"
            style={{ boxShadow: "0px -10px 20px #00000017" }}>
            <div
              onClick={onClose}
              className="flex items-center justify-center border-[2px] rounded-full border-white w-[36px] h-[36px] absolute top-[36px]  right-[3.5%] z-40 bg-black cursor-pointer text-white font-bold">
              <i className="fi fi-rr-cross text-[12px] mt-1"></i>
            </div>
            <ProductCard
              product={product!}
              addToCart={() => onClick()}
              addToFavorite={() =>
                dispatch(
                  addProductToFavorite({
                    cat_id: cat_id,
                    product_id,
                  })
                )
              }
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductViewCard;
