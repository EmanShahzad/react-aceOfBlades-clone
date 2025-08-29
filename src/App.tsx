import Header from "./components/HeaderComponent/Header";
import NavBar from "./components/NavigationComponent/NavBar";
import Footer from "./components/FooterComponent/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import ProductsDisplay from "./pages/ProductsDisplay";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { useEffect } from "react";
import { fetchCategories } from "./redux/features/categories/CategorySlice";
import { fetchProducts } from "./redux/features/products/productSlice";
import { useAppDispatch } from "./redux/hooks";
import AdminPanel from "./pages/AdminPanel";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/:categoryId" element={<ProductsDisplay />} />
          <Route path="/adminView" element={<AdminPanel />} />
        </Routes>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
