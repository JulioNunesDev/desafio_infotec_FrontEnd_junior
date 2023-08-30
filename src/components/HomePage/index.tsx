import Card from "../../components/Card";
import useProductContext from "../../hooks/Products";

import S from "./styled";

const HomePage = () => {
  const { productList } = useProductContext();
  return (
    <S.MainBox>
      <h2>Produtos</h2>
      <div className="BoxProducts">
        {productList.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </S.MainBox>
  );
};

export default HomePage;
