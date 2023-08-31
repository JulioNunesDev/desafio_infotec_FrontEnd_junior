import ProductPage from "../../components/ProductPage/Index";
import { ProductProvider } from "../../hooks/Products";
import { CartProvider } from "../../hooks/Store";

const Products = () => {
  return (
    <CartProvider>
      <ProductProvider>
        <ProductPage />
      </ProductProvider>
    </CartProvider>
  );
};

export default Products;
