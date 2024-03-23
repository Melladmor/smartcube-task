import { useEffect, useRef } from "react";
import { ProductsT } from "../../redux/type";
import Product from "../product/Product";
import { useDispatch } from "react-redux";
import { setCurrentTab } from "../../redux/slices/scrollTabsSlice";
import Slider from "react-slick";

type Props = {
  id: number;
  title: string;
  products: ProductsT[];
  length: number;
  cat_id: number;
  sliderRef: Slider | any;
};

const Category = (props: Props) => {
  const { id, products, title, length, cat_id, sliderRef } = props;
  const categoryRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (categoryRef.current) {
            const parentNode = categoryRef.current?.parentNode as HTMLElement;

            const categoryIndex = Array.from(parentNode.children).indexOf(
              categoryRef.current
            );

            setTimeout(() => {
              dispatch(setCurrentTab(categoryIndex));
            }, 1000);
            setTimeout(() => {
              sliderRef.current.slickGoTo(categoryIndex);
            }, 1200);
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
        <div className="flex items-center gap-[12px]">
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
