// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./01-css-global/Home";
import Category from "./04-styled-components/Category";
import ProductDetails from "./03-tailwind/ProductDetails";
import Cart from "./02-css-modules/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/eletronicos"
        element={<Category title="Eletrônicos" category="electronics" />}
      />
      <Route
        path="/acessorios"
        element={<Category title="Acessórios" category="accessories" />}
      />
      <Route path="/p/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
