import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaCartShopping } from "react-icons/fa6";
import S from "./styled";

const Header = () => {
  return (
    <S.BoxMain>
      <div className="logo">
        <Link to="/">
          <h2>Deafio InfoTec</h2>
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="carts">Carts</Link>
          </li>
        </ul>

        <div className="cart">
          <IconContext.Provider
            value={{ color: "black", size: "23", className: "teste" }}
          >
            <Link to="/cart">
              <button>
                <FaCartShopping />
              </button>
            </Link>
          </IconContext.Provider>
        </div>
      </nav>
    </S.BoxMain>
  );
};

export default Header;
