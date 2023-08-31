import { useEffect, useState } from "react";
import useProductContext from "../../hooks/Products";
import S from "./styled";
import useCartContext from "../../hooks/Store";

const CartItem = ({ item, product, addToCart, Decrement, removeFromCart }) => {
  return (
    <div className="teste" key={item.id}>
      <img src={product.image} style={{ width: "50%" }} alt="" />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <p>{product.price * item.quantity}</p>

      <p>{item.quantity}</p>
      

      <div className="btn">
        <button onClick={() => addToCart(item.id)}>Adicionar</button>
        <button onClick={() => Decrement(item.id)}>Diminuir</button>
        <button onClick={() => removeFromCart(item.id)}>Remover</button>
      </div>
    </div>
  );
};

const CartPage = () => {
  const { produtoCarrinho, removeFromCart, Decrement, addToCart } = useCartContext();
  const { productList } = useProductContext();
  const [valueTotal, setValueTotal] = useState<number>(0);

  useEffect(() => {
    const updatedCarrinho = produtoCarrinho.map((item) => {
      const product = productList.find((prevItem) => prevItem.id === item.id);
      const productValue = product.price * item.quantity;
      return { ...item, value: productValue };
    });

    const total = updatedCarrinho.reduce((acc, item) => acc + item.value, 0);

    setValueTotal(total);
  }, [produtoCarrinho, productList]);

  return (
    <S.BoxMain>
      <div className="BoxContent">
        {produtoCarrinho.map((item) => {
          const product = productList.find((prev) => prev.id === item.id);
          return (
            <CartItem
              key={item.id}
              item={item}
              product={product}
              addToCart={addToCart}
              Decrement={Decrement}
              removeFromCart={removeFromCart}
            />
          );
        })}
        <div className="priceTotal">
          <p>{valueTotal.toFixed(2)}</p>
        </div>
      </div>
      <div className="boxcheckout">
        adc
      </div>
    </S.BoxMain>
  );
};

export default CartPage;
