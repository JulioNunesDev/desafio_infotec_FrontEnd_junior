import Card from "../../components/Card";
import S from "./styled";

const Home = () => {
  return (
    <S.MainBox>
      <h2>Produtos</h2>
      <div className="BoxProducts">
        <Card />
      </div>
    </S.MainBox>
  );
};

export default Home;
