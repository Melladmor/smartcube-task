import { useSelector } from "react-redux";
import { selectCategories } from "../../redux/slices/categoresSlice";
import CartProudcts from "../cart/CartProudcts";

const CartLayout = () => {
  const cart = useSelector(selectCategories).cart;
  const totalPrice = cart?.reduce((total, el) => {
    return total + el.price;
  }, 0);
  return (
    <div className="box  bg-white border-l border-r border-border-main  lg:rounded-tr-[12px] lg:rounded-tl-[12px] pb-[50px]">
      <div className="mb-[19px]">
        <img
          src="https://b.zmtcdn.com/data/pictures/4/19770374/247f30160b560037e5c3398b6af7d3f3.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
          alt="resturantimage.png"
          loading="lazy"
          className="w-full h-[179px] lg:rounded-tr-[12px] lg:rounded-tl-[12px] object-fill"
        />
      </div>
      <div className="flex gap-[14px] justify-center items-center mb-[3px]">
        <h3 className="font-bold lg:text-[18px] md:text-[16px] sm:text-[14px] xs:text-[14px] text-black">
          Jawharat Esham Resturant
        </h3>
        <div className="flex  items-center gap-1">
          <p className="lg:text-[16px] md:text-[14px] sm:text-[14px] xs:text-[14px]  font-[600] text-green">
            4.6
          </p>
          <div className="lg:mt-[2px] md:mt-[1px] sm:mt-0 xs:mt-0 xs:mb-[2px] md:mb-0 lg:mb-0 sm:mb-0">
            <i className="fi fi-sr-star lg:text-[14px] md:text-[13px] sm:text-[12px] xs:text-[10px]  text-green"></i>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3 mb-[5px]">
        <h4 className="lg:text-[14px] md:text-[12px] sm:text-[10px] xs:text-[10px] font-normal">
          Wafi Mall, First Floor, Horus, Phase 5, Dubai
        </h4>
        <div className="flex justify-center items-center lg:w-[36px] lg:h-[36px] md:w-[30px] md:h-[30px] sm:w-[30px] sm:h-[30px] xs:w-[25px] xs:h-[25px]  lg:rounded-[15px] md:rounded-[15px] sm:rounded-[10px] xs:rounded-[5px] bg-black text-white">
          <i className="fi fi-rr-marker lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px]  mt-1"></i>
        </div>
      </div>

      <div className="flex justify-center items-center lg:mb-[30px] md:mb-[30px] sm:mb-[20px] xs:mb-[15px]">
        <div className="flex justify-center items-center px-[22px] lg:py-[10px] md:py-[10px] sm:py-[8px] xs:py-[6px] lg:rounded-[6px] md:rounded-[4px] sm:rounded-[4px] xs:rounded-[4px] bg-black text-white lg:text-[14px] md:text-[12px] sx:text-[12px] xs:text-[12px]">
          Arabic Resturant
        </div>
      </div>

      <div className="border-t border-b border-border-main overflow-y-scroll h-[150px]">
        <div className="w-full h-full">
          {cart?.length === 0 ? (
            <div className="w-full h-full flex justify-center items-center lg:text-[18px] md:text-[16px] sm:text-[14px] xs:text-[14px] font-bold ">
              Your Cart Is Empty
            </div>
          ) : (
            cart?.map((el) => {
              return <CartProudcts product={el} />;
            })
          )}
        </div>
      </div>
      <div className="lg:pt-[25px] md:pt-[14px] sm:pt-[12px] xs:pt-[10px] px-[18px] ">
        <p>
          <span className="lg:text-[14px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-[#2F3333A6] mr-[17px]">
            Total Price
          </span>
          <span className="lg:text-[18px] md:text-[16px] sm:text-[14px] xs:text-[14px] font-bold text-[#020A05]">
            AED {totalPrice}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CartLayout;
