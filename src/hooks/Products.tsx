import React, { createContext, useContext, ReactNode, useState } from "react";

const jsonData = [
  {
    id: "1",
    name: "Coco da Bahia",
    image:
      "https://th.bing.com/th/id/OIP.wc_oscfHtgq0WxovHDuCpQHaD4?pid=ImgDet&rs=1",
    price: 3.0,
    resume: `O coco da Bahia
      Nunca foi baiano
      Se você quer saber esse
      Coco é sergipano
      Lá na Barra dos Coqueiros
      Tem conquista bom de coco
      Tira coco bebe coco
      Come coco e faz cocada
      Chega morena vamos
      Coquear um pouco`,
  },
  {
    id: "2",
    name: "Abóbora",
    image:
      "https://th.bing.com/th/id/R.7016bc89f4a200837e05530a2d6edc41?rik=YiGZqHTEk737Tg&riu=http%3a%2f%2fwww.iguaria.com%2fwp-content%2fuploads%2f2015%2f11%2fVarios-Tipos-de-Abobora.jpg&ehk=bITGi4DPrDUdA0oVnkmCzNvJvxqAZtfClEWLZ%2f8Obgc%3d&risl=&pid=ImgRaw&r=0",
    price: 7.25,
    resume:
      "Abóbora ou jerimum, fruto da aboboreira, é uma designação popular atribuída a diversas espécies de plantas da família Cucurbitaceae, nomeadamente às classificadas nos géneros:Abobra",
  },
  {
    id: "3",
    name: "Ovos Dúzia",
    image:
      "https://th.bing.com/th/id/R.6d1073f112b8937ea639bb3c25182d74?rik=%2f2JGaFIjijqZpQ&pid=ImgRaw&r=0",
    price: 9.5,
    resume:
      "O ovo é pura proteína, e há vários métodos (tanto doces, quanto salgados) de preparar esta potência nutricional natural.",
  },
  {
    id: "4",
    name: "Ovos Meia-duzia",
    image:
      "https://media.istockphoto.com/photos/six-eggs-picture-id518903458?k=6&m=518903458&s=612x612&w=0&h=CT9EFloy4sGhuzuXFeOes226vs4jK6cTy3xsBLMjmiE=",
    price: 4.75,
    resume:
      "O ovo é pura proteína, e há vários métodos (tanto doces, quanto salgados) de preparar esta potência nutricional natural.",
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
