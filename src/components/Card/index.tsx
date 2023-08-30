import { FaCartShopping } from "react-icons/fa6";
import S from "./styled";
import { IconContext } from "react-icons";
import UseContextProvider from "../../hooks/Store";
const Card = () => {
  const {openCart, setOpenCart, contador, setContador, } = UseContextProvider()
  return (
    <S.MainBox>
      <S.BoxContent>
        <button  className="addCart" onClick={()=>setContador(contador => contador + 1)}>
          <IconContext.Provider
            value={{ color: "var(--color-primary)", size: "23" }}
          >
            <FaCartShopping />
          </IconContext.Provider>
        </button>
        <div className="image">
          <img
            src="https://ecovarzeapb.com/wp-content/uploads/2020/05/1005524_1_1541701676-300x300.jpg"
            alt=""
          />
        </div>
        <div className="tittle">
          <h2>Coco da bahia</h2>
          <div className="price">
            <p>R$3,50</p>
          </div>
        </div>
      </S.BoxContent>
    </S.MainBox>
  );
};

export default Card;
