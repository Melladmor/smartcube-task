import { TabsT } from "./Tabs";

type Props = {
  tab: TabsT;
  isActive: boolean;
  onClick: () => void;
};

const Tab = (props: Props) => {
  const { tab, onClick, isActive } = props;
  return (
    <div
      className={`lg:min-w-[143px] md:min-w-[123px] sm:min-w-[103px] xs:w-fit lg:h-[48px] md:h-[38px] sm:h-[28px] xs:h-[28px] lg:rounded-[24px] md:rounded-[20px] sm:rounded-[16px] xs:rounded-sm  xs:px-[5px]  ${
        isActive ? "bg-purple" : "bg-white"
      } lg:border-[2px] md:border-[2px]  border-purple ${
        isActive ? "text-white" : "text-purple"
      } lg:text-[14px] md:text-[12px] sm:text-[12px] xs:text-[10px] flex justify-center items-center cursor-pointer font-[500] text-nowrap`}
      onClick={onClick}
      id={String(tab?.id)}>
      {tab?.title}
    </div>
  );
};

export default Tab;
