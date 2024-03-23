import { CartT } from "../../redux/type";
import { useDispatch } from "react-redux";
import { deleteProductFromCart } from "../../redux/slices/categoresSlice";

type Props = {
  product: CartT;
};

const CartProudcts = (props: Props) => {
  const { product } = props;
  const dispatch = useDispatch();

  const deleteProductCart = () => {
    dispatch(
      deleteProductFromCart({
        cat_id: product?.cat_id,
        product_id: product?.id,
      })
    );
  };

  return (
    <div
      className={`lg:h-[96px] md:h-[96px] sm:h-[86px] xs:h-[76px] py-[12px] px-[12px]  border-b border-border-main mb-2 `}>
      <div className="flex gap-3 items-center">
        <img
          src={product?.images[0]?.url}
          className="rounded-md lg:w-[72px] lg:h-[72px] md:w-[62px] md:h-[62px] sm:w-[62px] ms:h-[62px] xs:w-[52px] xs:h-[52px]"
          alt=""
          loading="lazy"
        />
        <div className="w-full flex justify-between items-center">
          <div>
            <h4 className="lg:text-[18px] md:text-[16px] sm:text-[14px] xs:text-[12px] font-[600] text-purple">
              {product?.title}
            </h4>
            <p className="  lg:text-[14px] md:text-[14px] sm:text-[12px] xs:text-[10px] font-[600]">
              AED {product?.price}
            </p>
          </div>
          <div onClick={deleteProductCart}>
            <i className="fi fi-rr-trash  lg:text-[25px] md:text-[20px] sx:text-[16px] xs:text-[16px] cursor-pointer"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProudcts;
