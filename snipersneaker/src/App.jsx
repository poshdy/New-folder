import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Footer, Navbar } from "./components";
import { Toaster } from "react-hot-toast";
import { Suspense, lazy } from "react";
const Shop = lazy(() => import("./pages/Shop"));
const ProductDetalis = lazy(() => import("./pages/ProductDetalis"));
const Cart = lazy(() => import("./pages/Cart"));
function App() {
  return (
    <div className="overflow-y-hidden relative">
      <Navbar />
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/shop"
          element={
            <Suspense fallback={<h1>Loadingg</h1>}>
              <Shop />
            </Suspense>
          }
        />
        <Route
          path="/cart"
          element={
            <Suspense fallback={<h1>Loadingg</h1>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="/product/:slug"
          element={
            <Suspense fallback={<h1>Loadingg</h1>}>
              <ProductDetalis />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
