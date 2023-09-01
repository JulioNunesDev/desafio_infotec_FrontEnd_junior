import { useState } from "react";
import S from "./styled";
import useProductContext from "../../hooks/Products";

const CartsPage = () => {
  const [idCart, setIdCart] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { productList } = useProductContext();
  const [showResults, setShowResults] = useState(false);

  const handleShowResults = () => {
    if (!idCart) {
      alert("Insira um código de carrinho válido.");
      return;
    }

    const productsCart = JSON.parse(localStorage.getItem("carts")) || [];
    const matchingCart = productsCart.find((cart) => cart.id === idCart);
    console.log(matchingCart);

    if (matchingCart) {
      const filteredItems = matchingCart.data.map((item) => {
        const matchingProduct = productList.find(
          (product) => product.id === item.id
        );
        return matchingProduct ? { ...item, product: matchingProduct } : null;
      });

      setFilteredProducts(filteredItems.filter(Boolean));
      setShowResults(true);
    } else {
      alert("Carrinho não encontrado com este código.");
      setFilteredProducts([]);
      setShowResults(false);
    }
  };

  return (
    <S.Main>
      <div className="header-input">
        <div>
          <input
            onChange={({ target }) => setIdCart(target.value)}
            type="text"
            placeholder="Insira o código do carrinho"
            value={idCart}
          />
          <button onClick={handleShowResults}>Mostrar Resultados</button>
        </div>
      </div>
      {showResults && (
        <div className="products">
          {filteredProducts.map((item) => (
            <div className="productsStyles" key={item.id}>
              <img src={item.product.image} />
              <h3>{item.product.name}</h3>
              <p>Quantidade: {item.quantity}</p>
              <p>Preço: {item.product.price}</p>
            </div>
          ))}
        </div>
      )}
    </S.Main>
  );
};

export default CartsPage;
