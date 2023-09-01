import S from "./styled";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <S.MainBox>
      <Link to={`/product/${data.id}`}>
        <S.BoxContent>
          <div className="image">
            <img src={data.image} alt={data.name} />
            <div className="tittle">
              <h3>{data.name}</h3>
              <p>R$ {data.price.toFixed(2)}</p>
            </div>
          </div>
        </S.BoxContent>
      </Link>
    </S.MainBox>
  );
};

export default Card;
