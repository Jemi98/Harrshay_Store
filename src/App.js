import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import ResponsiveAppBar from "./components/Appbar/Appbar";
import Cart from "./components/Pages/Cart/Cart";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Footer from "./components/Footer/Footer";
import "react-toastify/dist/ReactToastify.css";
import ProductPage from "./components/Pages/Product/ProductPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default App;
