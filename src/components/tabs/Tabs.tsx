import { useState, RefObject, useEffect } from "react";
import Tab from "./Tab";
import NextAndPrevButton from "../Buttons/NextAndPrevButton";
import { useDispatch } from "react-redux";
import { setCurrentTab } from "../../redux/slices/scrollTabsSlice";

export type TabsT = {
  id: number;
  title: string;
};

type Props = {
  tabs: TabsT[];
  activeTab: number;
  tabsRef: RefObject<HTMLDivElement>;
  categoriesRef: RefObject<HTMLDivElement>;
};

const Tabs = ({ tabs, activeTab, tabsRef, categoriesRef }: Props) => {
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);
  const dispatch = useDispatch();
  const handleTabClick = (index: number) => {
    dispatch(setCurrentTab(index));
    const childTab = tabsRef.current?.children[index] as HTMLElement;
    const childCatElement = categoriesRef.current?.children[
      index
    ] as HTMLElement;
    if (childCatElement && categoriesRef.current) {
      const categoryIndex = Array.from(categoriesRef.current.children).indexOf(
        childCatElement
      );
      setTimeout(() => {
        if (index === categoryIndex) {
          categoriesRef.current?.scrollTo(0, childCatElement.offsetTop - 95);
        }
      }, 100);
    }
    if (childTab && tabsRef.current) {
      const containerWidth = tabsRef.current.clientWidth;
      const tabOffsetLeft = childTab.offsetLeft;
      const tabWidth = childTab.clientWidth;

      const tabEndOffset = tabOffsetLeft + tabWidth;

      if (tabOffsetLeft <= tabsRef.current.scrollLeft) {
        tabsRef.current.scrollLeft = tabEndOffset - containerWidth;
      } else if (tabEndOffset >= tabsRef.current.scrollLeft + containerWidth) {
        tabsRef.current.scrollLeft = tabOffsetLeft;
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (tabsRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
        setShowPrev(scrollLeft > 0);
        setShowNext(scrollWidth - scrollLeft > clientWidth);
      }
    };

    if (tabsRef.current) {
      tabsRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (tabsRef.current) {
        tabsRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleScrollRight = () => {
    if (tabsRef.current) {
      tabsRef.current.scrollLeft += 100;
    }
  };

  const handleScrollLeft = () => {
    if (tabsRef.current) {
      tabsRef.current.scrollLeft -= 100;
    }
  };

  return (
    <div className="lg:px-[54px] md:px-[44px] sm:px-[34px]  lg:py-[25px] md:py-[25px] sm:py-[0px] xs:pt-[0px] w-full">
      <div className="flex items-center relative">
        {showPrev && (
          <NextAndPrevButton
            onClick={handleScrollLeft}
            type="prev"
            className="absolute top-0 left-[-4%] xs:hidden"
          />
        )}
        <div
          className="flex gap-[12px]  overflow-x-scroll w-[1000px]"
          ref={tabsRef}>
          {tabs.map((tab, index) => {
            return (
              <Tab
                key={tab.id}
                tab={{
                  id: tab?.id,
                  title: tab?.title,
                }}
                isActive={activeTab === index}
                onClick={() => handleTabClick(index)}
              />
            );
          })}
        </div>
        {showNext && (
          <NextAndPrevButton
            onClick={handleScrollRight}
            type="next"
            className="absolute top-0 right-[-3%] xs:hidden"
          />
        )}
      </div>
    </div>
  );
};

export default Tabs;
