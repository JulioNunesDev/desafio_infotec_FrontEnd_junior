import CartPage from "../../components/CartPage";
import { ProductProvider } from "../../hooks/Products";
import { CartProvider } from "../../hooks/Store";

const Cart = () => {
  return (
    <CartProvider>
      <ProductProvider>
        <CartPage />
      </ProductProvider>
    </CartProvider>
  );
};

export default Cart;
