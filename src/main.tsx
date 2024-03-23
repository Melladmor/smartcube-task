import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import "@flaticon/flaticon-uicons/css/all/all.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
