import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Header from "../components/Header";
import Product from "../pages/Product/Index";

import S from "./styled";
import Footer from "../components/Footer";
import PageCart from "../pages/cart";


function AppRoutes() {
  return (
      <BrowserRouter>
        <Header />
        <S.MainBox>
          <Routes>
      
            <Route path="/" element={<Home />} />

            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<PageCart />} />
            <Route path="*" element={<p>Erro</p>} />
            
          </Routes>
        </S.MainBox>
        <Footer />
      </BrowserRouter>
  );
}

export default AppRoutes;
