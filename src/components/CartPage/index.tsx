import { useEffect, useState } from "react";
import useProductContext from "../../hooks/Products";
import { FaPlus, FaTrash } from "react-icons/fa6";
import { IoIosRemove } from "react-icons/io";
import S from "./styled";
import useCartContext from "../../hooks/Store";
import { Link } from "react-router-dom";

const CartItem = ({ item, product, addToCart, Decrement, removeFromCart }) => {
  return (
    <div className="products" key={item.id}>
      <div className="image">
        <img src={product.image} alt={`Produto: ${product.name}`} />
      </div>
    
      <div className="products-price">
        <h2>{product.name}</h2>
        <p>
          Preço unitário:{" "}
          <span className="custom-color-btn-price">{product.price}</span>{" "}
        </p>
        <p>
          Qtd: <span className="custom-color-btn-price">{item.quantity}</span>
        </p>
      </div>
      <div className="btn">
        <button onClick={() => addToCart(item.id)}>
          <FaPlus />
        </button>
        <button onClick={() => Decrement(item.id)}>
          <IoIosRemove />
        </button>
      </div>
      <div className="outhers-btn">
        <button onClick={() => removeFromCart(item.id)}>
          <FaTrash />
        </button>
        <div>
          <p>
            Total:{" "}
            <span className="custom-color-btn-price">
              {product.price * item.quantity}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

const CartPage = () => {
  const { produtoCarrinho, removeFromCart, Decrement, addToCart } =
    useCartContext();
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
      </div>
      <div className="boxcheckout">
        <div className="tittle-products">
          <h3>Carrinho de Compras</h3>
          <div className="supplier">
            <p>
              Vendido por <strong>Pedro</strong>
            </p>
            <p>
              entrege por <strong>Pedro Express</strong>
            </p>
            <p>
              Garantia de entrega e qualidade em nosso produto.{" "}
              <Link to="/">Saiba mais</Link>
            </p>
          </div>
        </div>

        <div className="priceTotal">
          <p>
            R${" "}
            <span className="custom-color-btn-price">
              {valueTotal.toFixed(2)}
            </span>
          </p>
        </div>

        <div className="btns">
          <button>Finalizar compra</button>
          <Link to="/">Continue Comprando</Link>
        </div>
      </div>
    </S.BoxMain>
  );
};

export default CartPage;
