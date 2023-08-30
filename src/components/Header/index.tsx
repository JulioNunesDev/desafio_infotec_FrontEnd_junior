import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaCartShopping } from "react-icons/fa6";
import S from "./styled";
import CartShopping from "../Cart";
import UseContextProvider from "../../hooks/Store";

const Header = () => {
  const {openCart, setOpenCart, contador} = UseContextProvider()
  return (
    <S.BoxMain>
      <div className="logo">
        <h2>InfoTec</h2>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="product">Produtos</Link>
          </li>
        </ul>
      </nav>
      <div className="cart">
        <div className="countCart">
          <p>{contador}</p>
          </div>
        <IconContext.Provider value={{ color: "black", size: "23" }}>
          <button  onClick={()=>setOpenCart(!openCart)}>
            <FaCartShopping />
          </button>
        </IconContext.Provider>
        {openCart && (
          <CartShopping />
          )}
      </div>
    </S.BoxMain>
  );
};

export default Header;
