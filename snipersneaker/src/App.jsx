import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import { Footer, Navbar } from "./components";
import ProductDetalis from "./pages/ProductDetalis";;
import { Toaster } from "react-hot-toast";
function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:slug" element={<ProductDetalis />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
