import Card from "../../components/Card";
import useProductContext from "../../hooks/Products";

import S from "./styled";

const HomePage = () => {
  const { productList } = useProductContext();

  const IdsToIgnore = ["4"];

  return (
    <S.MainBox>
      <div className="BoxProducts">
        <h2>Produtos</h2>

        <div className="productsMap">
          {productList.map((item, index) => {
            let ignored = false;

            IdsToIgnore.forEach((ignore) => {
              ignored = item.id === ignore ? true : false;
            });

            if (ignored) return <></>;

            return <Card key={index} data={item} />;
          })}
        </div>
      </div>
    </S.MainBox>
  );
};

export default HomePage;
