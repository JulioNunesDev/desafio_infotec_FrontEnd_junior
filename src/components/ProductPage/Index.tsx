import { useParams, Link } from "react-router-dom";
import S from "./styled";
import useCartContext from "../../hooks/Store";
import useProductContext from "../../hooks/Products";
import CustomAlert, { notify } from "../ModalAlert"; // Importe o componente CustomAlert e a função notify
import { useState } from "react";

const ProductPage = () => {
  const { addToCart } = useCartContext();
  const { productList } = useProductContext();
  const { id } = useParams();
  const [meia, setMeia] = useState(false);

  const product = productList.find((product) => product.id === id);

  const handleAddToCart = () => {
    if (product) {
      if (meia) {
        addToCart(productList.find((prev) => prev.id === "4").id);
      } else {
        addToCart(product.id);
      }
      notify(`${product.name} foi adicionado ao carrinho!`); // Mostra o alerta personalizado
    }
  };

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <S.BoxMain>
      <div className="image">
        <img src={product.image} alt="" />
      </div>
      <div className="infors">
        <h2>{product.name}</h2>
        <div className="price">
          <p>Preço:</p>
          <p>R$: {product.price}</p>
        </div>
        <div className="resume">
          <p>{product.resume}</p>
        </div>

        {product.name === "Ovos" && (
          <div className="checkbox-wrapper-65">
            <label className="cbk1-65">
              <input
                id="cbk1-65"
                type="checkbox"
                name="meia"
                checked={meia}
                onClick={() => setMeia(!meia)}
              />
              <span className="cbx">
                <svg viewBox="0 0 12 11" height="11px" width="12px">
                  <polyline points="1 6.29411765 4.5 10 11 1"></polyline>
                </svg>
              </span>
              <span>Meia Dúzia</span>
            </label>
          </div>
        )}

        <div className="btn">
          <button onClick={handleAddToCart}>Adicionar Carrinho</button>
          <Link to="/">Continue Comprando</Link>
        </div>
      </div>
      <CustomAlert /> {/* Renderiza o componente CustomAlert */}
    </S.BoxMain>
  );
};

export default ProductPage;
