
import { ProductProvider } from "../../hooks/Products";
import { CartProvider } from "../../hooks/Store";

const Carts = () => {
  const createNewCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) return;

    const cartsList = JSON.parse(localStorage.getItem("carts"));
    const newList = cartsList ? [...cartsList] : [];

    const randomIdWithDate =
      new Date().getTime().toString(36) +
      Math.random().toString(36).substring(2);

    const newItemToList = {
      id: randomIdWithDate,
      data: [...cart],
    };

    newList.push(newItemToList);
    localStorage.setItem("carts", JSON.stringify(newList));
    localStorage.setItem("cart", "[]");

    return randomIdWithDate;
  };

  return (
    <CartProvider>
      <ProductProvider>
        <button
          onClick={() => {
            const id = createNewCart();
            alert(`Seu carrinho foi criado id: ${id}`);
          }}
        >
          click
        </button>
      </ProductProvider>
    </CartProvider>
  );
};

export default Carts;
