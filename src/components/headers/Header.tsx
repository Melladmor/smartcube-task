import { useDispatch, useSelector } from "react-redux";
import { selectStepSliceValues } from "../../redux/slices/stepsSlice";
import Steps from "../Steps/Steps";
import {
  selectCategories,
  showAndHideCart,
} from "../../redux/slices/categoresSlice";
import useMediaQuery from "../../hooks/useMediaQuery";

type Props = {
  title: string;
  onClose?: () => void;
};

const Header = (props: Props) => {
  const cart = useSelector(selectCategories).cart;
  const isSmallScreen = useMediaQuery("(max-width: 640px)");
  const dispatch = useDispatch();

  const stepSliceValues = useSelector(selectStepSliceValues);
  const progressValue =
    stepSliceValues.currentStep === stepSliceValues.steps?.length
      ? "100%"
      : `${
          (100 / stepSliceValues?.steps?.length) * stepSliceValues?.currentStep
        }%`;
  return (
    <div className="lg:mb-[53px]">
      <div className="bg-white h-[96px] opacity-100 lg:px-[112px] md:px-[20px] sm:px-[20px] xs:px-[20px] py-[24px] xs:flex xs:items-center xs:w-full">
        <div className="flex justify-between items-center w-full">
          <div className="flex lg:gap-[39px] md:gap-[29px] sm:gap-[19px] xs:gap-[10px] items-center">
            <i className=" lg:h-[48px] lg:w-[48px] md:h-[38px] md:w-[38px] sm:h-[28px] sm:w-[28px] xs:h-[28px] xs:w-[28px] fi fi-ss-circle-xmark text-icons-light lg:text-[42px] md:text-[32px] sx:text-[23px] xs:text-[23px] p-0 m-0 "></i>
            <h3 className="lg:text-[24px] md:text-[20px] sm:text-[18px] xs:text-[14px] font-bold text-black">
              {props.title}
            </h3>
          </div>

          <div className="indicator lg:hidden md:hidden sm:block xs:block">
            <p className="indicator-item  badge badge-xs bg-purple text-white">
              {cart?.length}
            </p>
            <i
              className="fi fi-rr-shopping-cart cursor-pointer"
              onClick={() => dispatch(showAndHideCart(true))}></i>
          </div>
          {!isSmallScreen && <Steps />}
        </div>
      </div>
      <div className="h-[6px] bg-gray w-full relative lg:block md:block sm:hidden xs:hidden">
        <div
          className={`h-[6px] bg-mainBlue `}
          style={{
            width: progressValue,
          }}></div>
      </div>
    </div>
  );
};

export default Header;
