import { RefObject, useEffect, useRef } from "react";
import { ProductsT } from "../../redux/type";
import Product from "../product/Product";
import { useDispatch } from "react-redux";
import { setCurrentTab } from "../../redux/slices/scrollTabsSlice";

type Props = {
  id: number;
  title: string;
  products: ProductsT[];
  length: number;
  cat_id: number;
  tabsRef: RefObject<HTMLDivElement>;
};

const Category = (props: Props) => {
  const { id, products, title, length, cat_id, tabsRef } = props;
  const categoryRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (categoryRef.current) {
            const parentNode = categoryRef.current?.parentNode as HTMLElement;

            // Find the index of the category element within its parent node's children
            const categoryIndex = Array.from(parentNode.children).indexOf(
              categoryRef.current
            );
            dispatch(setCurrentTab(categoryIndex));
            const childTab = tabsRef.current?.children[
              categoryIndex
            ] as HTMLElement;

            if (childTab && tabsRef.current) {
              const containerWidth = tabsRef.current.clientWidth;
              const tabOffsetLeft = childTab.offsetLeft;
              const tabWidth = childTab.clientWidth;

              const tabEndOffset = tabOffsetLeft + tabWidth;

              setTimeout(() => {
                if (
                  tabsRef.current &&
                  tabOffsetLeft <= tabsRef.current.scrollLeft
                ) {
                  tabsRef.current.scrollLeft = tabEndOffset - containerWidth;
                } else if (
                  tabsRef.current &&
                  tabEndOffset >= tabsRef.current.scrollLeft + containerWidth
                ) {
                  tabsRef.current.scrollLeft = tabOffsetLeft;
                }
              }, 100);
            }
          }
        }
      },
      { threshold: 0.4 }
    );

    if (categoryRef.current) {
      observer.observe(categoryRef.current);
    }

    return () => {
      if (categoryRef.current) {
        observer.unobserve(categoryRef.current);
      }
    };
  }, []);
  return (
    <div id={String(id)} ref={categoryRef} className="mb-[53px]">
      <div className="flex justify-between items-center mb-[14px]">
        <div className="flex items-center gap-[12px]" ref={titleRef}>
          <h3 className="lg:text-[20px] md:text-[18px]  sm:text-[16px] xs:text-[14px] font-bold ">
            {title}
          </h3>
          <div className="lg:w-[28px] lg:h-[28px] md:w-[26px] md:h-[26px] sm:w-[24px] sm:h-[24px] xs:w-[20px] xs:h-[20px] xs:text-[12px]  text-white bg-black rounded-[50%] flex items-center justify-center">
            {length}
          </div>
        </div>
        <p className="text-[#2F3333A6] text-[14px]">Select</p>
      </div>
      {products?.map((product: ProductsT) => {
        return <Product key={product?.id} product={product} cat_id={cat_id} />;
      })}
    </div>
  );
};

export default Category;
