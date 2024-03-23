import { ProductsT } from "../../redux/type";
import { useDispatch } from "react-redux";
import { showProduct } from "../../redux/slices/showProductSlice";
import {
  addProductToCart,
  deleteProductFromCart,
} from "../../redux/slices/categoresSlice";

type Props = {
  product: ProductsT;
  cat_id: number;
};

const Product = (props: Props) => {
  const { cat_id, product } = props;
  const dispatch = useDispatch();
  const selectProductToAddToTheCart = () => {
    dispatch(
      addProductToCart({
        cat_id: cat_id,
        product_id: product?.id,
      })
    );
  };

  const deleteProductCart = () => {
    dispatch(
      deleteProductFromCart({
        cat_id: cat_id,
        product_id: product?.id,
      })
    );
  };

  const viewProduct = () => {
    dispatch(
      showProduct({
        cat_id: cat_id,
        products: product,
      })
    );
  };

  return (
    <div
      className={`lg:h-[96px] md:h-[96px] sm:h-[86px] xs:h-[76px] flex items-center xs:px-[8px] lg:px-[12px] md:px-[12px] mb-1  ${
        product?.isSelected
          ? "lg:border-[3px] md:border-[3px] sm:border-[2px] xs:border-[2px] border-purple rounded-[12px]"
          : "border-b border-border-main"
      }  `}
      style={{
        background: product?.isSelected
          ? "linear-gradient(96deg, #FFFFFF 0%, #F5F2FF 100%)"
          : "",
      }}>
      <div className="w-full">
        <div className="flex lg:gap-3 md:gap-3 sm:gap-2 xs:gap-2 items-center">
          <div className="lg:w-[72px] lg:h-[72px] md:w-[62px] md:h-[62px] sm:w-[62px] ms:h-[62px] xs:w-[52px] xs:h-[52px]">
            <img
              src={product?.images[0]?.url}
              className="w-full h-full rounded-md "
              alt=""
              loading="lazy"
            />
          </div>
          <div className="lg:w-[calc(100%-90px)] md:w-[calc(100%-80px)] sm:w-[calc(100%-80px)] xs:w-[calc(100%-70px)]">
            <div className="w-full flex justify-between items-center">
              <div className="w-full">
                <h4 className="lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] font-[600]">
                  {product?.title}
                </h4>
                <div className="lg:hidden md:hidden sm:block xs:block">
                  <p className="text-text-spicalColor lg:text-[14px] md:text-[14px] sm:text-[12px] xs:text-[10px] opacity-80  font-medium ">
                    {product?.description?.slice(0, 37)}...
                  </p>
                </div>
                <div className="flex justify-between w-full">
                  <div className="flex lg:gap-[20.5px] md:gap-[18px] sm:gap-[16px]  xs:gap-[5px] items-center">
                    <p className="lg:text-[16px] md:text-[14px] sm:text-[14px] xs:text-[10px] font-[600]">
                      AED {product?.price}
                    </p>
                    <div className="flex items-center gap-1">
                      <div>
                        <p className="lg:text-[16px] md:text-[14px] sm:text-[14px] xs:text-[10px]  font-[600] text-green">
                          {product?.rank}{" "}
                        </p>
                      </div>
                      <div className="lg:mt-[2px] md:mt-[1px] sm:mt-0 xs:mt-0 xs:mb-[2px] md:mb-0 lg:mb-0 sm:mb-0">
                        <i className="fi fi-sr-star lg:text-[14px] md:text-[13px] sm:text-[12px] xs:text-[10px] text-green"></i>
                      </div>
                    </div>
                    <div className="lg:block md:block sm:hidden xs:hidden">
                      <p className="text-text-spicalColor lg:text-[14px] md:text-[14px] sm:text-[12px] xs:text-[10px] opacity-80  font-medium ">
                        {product?.description?.slice(0, 37)}...
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center lg:gap-[15px] md:gap-[15px]  sm:gap-[10px] xs:gap-[8px] ">
                      <div onClick={viewProduct}>
                        <i className="fi fi-rr-eye lg:text-[18px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-text-spicalColor cursor-pointer"></i>
                      </div>
                      {product?.isSelected ? (
                        <div>
                          <i
                            className="fi fi-ss-check-circle lg:text-[18px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-mainBlue cursor-pointer"
                            onClick={deleteProductCart}></i>
                        </div>
                      ) : (
                        <div>
                          <i
                            className="fi fi-rr-circle lg:text-[18px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-text-spicalColor cursor-pointer"
                            onClick={selectProductToAddToTheCart}></i>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
