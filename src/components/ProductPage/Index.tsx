import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import S from "./styled";
import useCartContext from "../../hooks/Store";
import useProductContext from "../../hooks/Products";



const ProductPage = () => {
  const { addToCart, produtoCarrinho } = useCartContext();
  const { productList } = useProductContext();
  const { id } = useParams();

  const product = productList.find((product) => product.id === id);

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
        <div className="btn">
          <Link to="/cart" onClick={() => {
          addToCart(product.id)
          console.log(produtoCarrinho)
          }}>
            Adicionar Carrinho
          </Link>
          <Link to="/">Continue Comprando</Link>
        </div>
      </div>
    </S.BoxMain>
  );
};

export default ProductPage;
