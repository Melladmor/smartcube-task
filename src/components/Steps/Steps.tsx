import {
  handleChangeSteps,
  selectStepSliceValues,
} from "../../redux/slices/stepsSlice";
import { StepT } from "../../redux/type";
import Step from "./Step";
import { useDispatch, useSelector } from "react-redux";

const Steps = () => {
  const stepSliceValue = useSelector(selectStepSliceValues);
  const dispatch = useDispatch();

  return (
    <div className="xs:flex xs:justify-center xs:items-center border border-border-main lg:px-[26px] md:px-[22px] sm:px-[18px] xs:px-[18px] py-[12px] lg:h-[48px] md:h-[38px] sm:h-[28px] xs:s-[18px] rounded-[24px]">
      <div className="flex gap-[32px] items-center">
        <p className="text-mainBlue text-[14px] font-bold  lg:block md:block sm:block  xs:hidden">
          Step {stepSliceValue?.currentStep} / {stepSliceValue?.steps?.length}
        </p>
        <div className="flex gap-[7px]">
          {stepSliceValue?.steps?.map((step: StepT) => {
            return (
              <Step
                key={step?.id}
                isActive={step?.id === stepSliceValue?.currentStep}
                onClick={() => {
                  dispatch(handleChangeSteps(step.id));
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Steps;
