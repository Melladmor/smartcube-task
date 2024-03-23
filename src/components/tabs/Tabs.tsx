import { useState, RefObject, useMemo } from "react";
import NextAndPrevButton from "../Buttons/NextAndPrevButton";
import { useDispatch } from "react-redux";
import { setCurrentTab } from "../../redux/slices/scrollTabsSlice";
import Slider from "react-slick";
import useMediaQuery from "../../hooks/useMediaQuery";
import Tab from "./Tab";

export type TabsT = {
  id: number;
  title: string;
};

type Props = {
  tabs: TabsT[];
  activeTab: number;
  categoriesRef: RefObject<HTMLDivElement>;
  sliderRef: Slider | any;
};

const Tabs = ({ tabs, activeTab, categoriesRef, sliderRef }: Props) => {
  const [showPrev, setShowPrev] = useState<number>(0);
  const [next, setNext] = useState<number>(0);
  const isSmallScreen = useMediaQuery("(max-width: 640px)");
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    swipeToSlide: true,
    beforeChange: (current: number, next: number) => {
      setShowPrev(current);
      setNext(next);
    },
    afterChange: (index: number) => {
      setShowPrev(index);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const dispatch = useDispatch();
  const handleTabClick = (index: number) => {
    dispatch(setCurrentTab(index));
    const childCatElement = categoriesRef.current?.children[
      index
    ] as HTMLElement;
    if (childCatElement && categoriesRef.current) {
      const categoryIndex = Array.from(categoriesRef.current.children).indexOf(
        childCatElement
      );
      const scrollTo = isSmallScreen ? 100 : 180;
      setTimeout(() => {
        if (index === categoryIndex) {
          categoriesRef.current?.scrollTo(
            0,
            childCatElement.offsetTop - scrollTo
          );
        }
      }, 500);

      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.slickGoTo(index);
        }
      }, 1000);
    }
  };

  const handleScrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handleScrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const showNext = useMemo(() => {
    const length = (tabs?.length - 1) / 2;
    const result = length + 0.5;
    return result !== next;
  }, [next]);

  return (
    <div className="relative lg:px-[54px] md:px-[44px] sm:px-[34px]  lg:py-[25px] md:py-[25px] sm:py-[0px] xs:pt-[0px]">
      {showPrev !== 0 && !isSmallScreen && (
        <NextAndPrevButton
          onClick={handleScrollLeft}
          type="prev"
          className="absolute top-[24%] left-[3%] z-10"
        />
      )}
      <div className="slider-container overflow-hidden">
        <Slider
          {...settings}
          ref={(slider) => {
            sliderRef.current = slider;
          }}>
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
        </Slider>
      </div>
      {!isSmallScreen && showNext && (
        <NextAndPrevButton
          onClick={handleScrollRight}
          type="next"
          className="absolute top-[24%] right-[2%]"
        />
      )}
    </div>
  );
};

export default Tabs;
