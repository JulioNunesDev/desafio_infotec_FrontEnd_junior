import UseContextProvider from "../../hooks/Store";
import S from "./styled";

const CartShopping = () => {
  const { contador } = UseContextProvider();
  return (
    <S.CartBox>
      <div className="top">
        <h2>Produtos</h2>
      </div>
      <S.BoxContent>
        <div className="cartProducts">{contador}</div>
      </S.BoxContent>
    </S.CartBox>
  );
};

export default CartShopping;
