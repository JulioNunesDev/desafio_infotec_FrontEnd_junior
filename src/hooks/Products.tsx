import React, {
  createContext,
  useContext,
  ReactNode,
  useState
} from "react";


const jsonData = [
  {
    id: "1",
    name: "Coco da Bahia",
    image:
      "https://ecovarzeapb.com/wp-content/uploads/2020/05/1005524_1_1541701676-300x300.jpg",
    price: 3.00,
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
  },
  {
    id: "2",
    name: "Abóbora",
    image:
      "https://th.bing.com/th/id/OIP._5rSlQ9770VvPnuYzP2WnQAAAA?pid=ImgDet&rs=1",
    price: 7.50,
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
  },
  {
    id: "3",
    name: "Ovo (Dúzia)",
    image:
      "https://th.bing.com/th/id/OIP.ofgJfpkRWjBW8o17jjc4aQAAAA?pid=ImgDet&rs=1",
    price: 9.50,
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
  },
];

interface ProductItem {
  id: string;
  name: string;
  image: string;
  price: number;
  resume: string;
}

interface ProductListProps {
  productList: ProductItem[]
} 



const ProductContext = createContext<ProductListProps>(undefined);

// Provedor do contexto
interface ProductProviderProps {
  children: ReactNode;
}
export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [productList] = useState<ProductItem[]>(jsonData);



  const contextValue: ProductListProps = {productList};

  return (
    <ProductContext.Provider value={contextValue}>{children}</ProductContext.Provider>
  );
};

// Hook personalizado para usar o contexto
const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};

export default useProductContext;
