type Props = {
  isActive: boolean;
  onClick: () => void;
};

const Step = (props: Props) => {
  const { isActive, onClick } = props;
  return (
    <div
      onClick={() => onClick()}
      className={`${
        isActive ? "bg-mainBlue" : "bg-gray"
      } lg:w-[12px] lg:h-[12px] md:w-[12px] md:h-[12px] sm:w-[10px] sm:h-[10px]  xs:w-[8px] xs:h-[8px]  rounded-full cursor-pointer`}></div>
  );
};

export default Step;
