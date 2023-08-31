import React, { createContext, useContext, ReactNode, useState } from "react";

const jsonData = [
  {
    id: "1",
    name: "Coco da Bahia",
    image:
      "https://th.bing.com/th/id/OIP.wc_oscfHtgq0WxovHDuCpQHaD4?pid=ImgDet&rs=1",
    price: 3.00,
    resume:
      `O coco da Bahia
      Nunca foi baiano
      Se você quer saber esse
      Coco é sergipano
      Lá na Barra dos Coqueiros
      Tem conquista bom de coco
      Tira coco bebe coco
      Come coco e faz cocada
      Chega morena vamos
      Coquear um pouco`
  },
  {
    id: "2",
    name: "Abóbora",
    image:
      "https://th.bing.com/th/id/R.7016bc89f4a200837e05530a2d6edc41?rik=YiGZqHTEk737Tg&riu=http%3a%2f%2fwww.iguaria.com%2fwp-content%2fuploads%2f2015%2f11%2fVarios-Tipos-de-Abobora.jpg&ehk=bITGi4DPrDUdA0oVnkmCzNvJvxqAZtfClEWLZ%2f8Obgc%3d&risl=&pid=ImgRaw&r=0",
    price: 7.25,
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
  },
  {
    id: "3",
    name: "Ovos",
    image:
      "https://th.bing.com/th/id/R.6d1073f112b8937ea639bb3c25182d74?rik=%2f2JGaFIjijqZpQ&pid=ImgRaw&r=0",
    price: 9.50,
    resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
  },
  {
    id: "4",
    name: "Ovos Meia-duzia",
    image:
      "https://th.bing.com/th/id/OIP.ofgJfpkRWjBW8o17jjc4aQAAAA?pid=ImgDet&rs=1",
    price: 4.75,
    resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
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
  productList: ProductItem[];
}

const ProductContext = createContext<ProductListProps>(undefined);

// Provedor do contexto
interface ProductProviderProps {
  children: ReactNode;
}
export const ProductProvider: React.FC<ProductProviderProps> = ({
  children,
}) => {
  const [productList] = useState<ProductItem[]>(jsonData);

  const contextValue: ProductListProps = { productList };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
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
