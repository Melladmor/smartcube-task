import { useDispatch, useSelector } from "react-redux";
import Drawer from "./components/Drawer/Drawer";
import Footer from "./components/footer/Footer";
import Header from "./components/headers/Header";
import CartLayout from "./components/layouts/CartLayout";
import CategoriesLayout from "./components/layouts/CategoriesLayout";
import {
  selectCategories,
  showAndHideCart,
} from "./redux/slices/categoresSlice";

function App() {
  const cart = useSelector(selectCategories);
  const dispatch = useDispatch();
  return (
    <div className="bg-backgrounds-main">
      <Header title="Select your meals" />
      <main className="min-h-[80vh] lg:mx-[112px] grid lg:grid-cols-12 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-[43px]">
        <div className="lg:col-span-8 md:col-span-1 sm:col-span-1 xs:col-span-1">
          <CategoriesLayout />
        </div>
        <div className="lg:col-span-4 md:col-span-1 lg:block md:block sm:hidden xs:hidden">
          <CartLayout />
        </div>
      </main>
      <Footer />
      <Drawer
        isOpen={cart?.showCart}
        onClose={() => dispatch(showAndHideCart(false))}
        title="Your Cart">
        <CartLayout />
      </Drawer>
    </div>
  );
}

export default App;
