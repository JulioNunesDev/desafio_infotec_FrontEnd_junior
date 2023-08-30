import S from "./styled";
import {Link} from 'react-router-dom'




const Card = ({data}) => {

  return (
    <S.MainBox>
      <S.BoxContent>
      <Link to={`/product/${data.id}`}>
        <div className="image">
          <img
            src={data.image}
            alt={data.name}
            />
        </div>
        <div className="tittle">
          <p>{data.name}</p>
          <p>R$ {data.price}</p>
        </div>
            </Link>
      </S.BoxContent>
    </S.MainBox>
  );
};

export default Card;
