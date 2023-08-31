import HomePage from "../../components/HomePage";
import { ProductProvider } from "../../hooks/Products";

const Home = () => {
  return (
    <ProductProvider>
      <HomePage />
    </ProductProvider>
  );
};

export default Home;
