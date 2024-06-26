import { useDispatch, useSelector } from "react-redux";
import Tabs, { TabsT } from "../tabs/Tabs";
import {
  addProductToCart,
  selectCategories,
} from "../../redux/slices/categoresSlice";
import { CategoryI } from "../../redux/type";
import Category from "../categories/Category";
import {
  hideProduct,
  selectShowProductSlice,
} from "../../redux/slices/showProductSlice";
import ProductViewCard from "../product/ProductViewCard";
import { useRef } from "react";
import { selectCurrentTab } from "../../redux/slices/scrollTabsSlice";
import Slider from "react-slick";
export interface SliderRefType {
  slickNext(): void;
  slickPrev(): void;
  slickGoTo(value: number): void;
}
const CategoriesLayout = () => {
  let sliderRef = useRef<Slider | null>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const activeTab = useSelector(selectCurrentTab);
  const categories = useSelector(selectCategories).categoreis;
  const product = useSelector(selectShowProductSlice).product;
  const showProductSliceValue = useSelector(selectShowProductSlice).show;
  const dispatch = useDispatch();

  const tabs: Omit<TabsT, "onClick">[] = categories?.map((tab: CategoryI) => {
    return {
      id: tab?.id,
      title: tab?.title,
    };
  });

  const selectProductToAddToTheCart = () => {
    const productToAdd = product?.product?.id;
    if (productToAdd)
      dispatch(
        addProductToCart({
          cat_id: product.cat_id as any,
          product_id: productToAdd,
        })
      );
  };

  return (
    <div className="border border-border-main lg:rounded-[12px] bg-white relative lg:h-[863px] md:h-[863px] sm:h-[100vh] xs:h-[100vh]">
      {!!showProductSliceValue && (
        <ProductViewCard
          onClick={selectProductToAddToTheCart}
          product_id={product?.product?.id as number}
          cat_id={product?.cat_id as number}
          onClose={() => dispatch(hideProduct())}
          className="absolute right-[36px]  top-32"
          open={showProductSliceValue}
        />
      )}
      <div className="lg:mb-[61px] md:mb-[51px] sm:mb-[41px] xs:mb-[31px] border-b border-border-main">
        <Tabs
          tabs={tabs}
          activeTab={activeTab?.currentTab}
          categoriesRef={categoriesRef}
          sliderRef={sliderRef}
        />
      </div>
      <div
        className="lg:px-[42px] md:px-[42px] sm:px-[32px] xs:px-[23px] lg:max-h-[600px] md:max-h-[600px] sm:max-h-[80vh] xs:max-h-[80vh] overflow-y-scroll snap-y snap-mandatory "
        ref={categoriesRef}>
        {categories?.map((cat: CategoryI) => {
          return (
            <Category
              id={cat?.id}
              key={cat?.id}
              length={cat?.products?.length}
              title={cat?.title}
              products={cat?.products}
              cat_id={cat?.id}
              sliderRef={sliderRef}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesLayout;
