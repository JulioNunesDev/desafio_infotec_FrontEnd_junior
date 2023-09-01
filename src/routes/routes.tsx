import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Header from "../components/Header";
import Product from "../pages/Product/Index";

import S from "./styled";
import Footer from "../components/Footer";
import Cart from "../pages/cart";
import Carts from "../pages/Carts/Index";

function AppRoutes() {
  return (
    <BrowserRouter>
      <S.MainBox>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/carts" element={<Carts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<p>Erro</p>} />
        </Routes>
      </S.MainBox>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
