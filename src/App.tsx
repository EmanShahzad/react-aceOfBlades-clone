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

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product" element={<ProductDetails />} />
        <Route
          path="/category-products-display"
          element={<ProductsDisplay />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
