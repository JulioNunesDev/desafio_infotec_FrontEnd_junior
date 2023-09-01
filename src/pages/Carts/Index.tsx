import CartsPage from "../../components/CartsPage/Index";
import { ProductProvider } from "../../hooks/Products";
import { CartProvider } from "../../hooks/Store";

const Carts = () => {
  return (
    <CartProvider>
      <ProductProvider>
        <CartsPage />
      </ProductProvider>
    </CartProvider>
  );
};

export default Carts;
