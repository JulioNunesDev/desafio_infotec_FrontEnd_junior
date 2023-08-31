import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  SetStateAction,
  Dispatch,
} from "react";

// Definindo os tipos


interface CarItemProps {
  id: string;
  quantity: number
}

interface CartContextType {
  addToCart: (itemId: string) => void;
  Decrement:(itemId: string) => void;
  removeFromCart: (productId: string) => void;
  openCart: boolean;
  setOpenCart: Dispatch<SetStateAction<boolean>>;
  produtoCarrinho: CarItemProps[];
  setProdutoCarrinho: Dispatch<SetStateAction<CarItemProps[]>>;

}


const CartContext = createContext<CartContextType | undefined>(undefined);

// Provedor do contexto
interface CartProviderProps {
  children: ReactNode;
}
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [openCart, setOpenCart] = useState<boolean>(false);
  const [produtoCarrinho, setProdutoCarrinho] = useState<CarItemProps[]>([]);


  useEffect(() => {
    // Simulando um fetch de um JSON (substitua pela sua lógica real)
   
      const oldCart = localStorage.getItem('cart')
      setProdutoCarrinho(JSON.parse(oldCart))
      console.log(produtoCarrinho)
  }, []);


  const addToCart = (id: string) => {
    setProdutoCarrinho((prevItems) => {
      const updatedItems = prevItems.map((prevItem) =>
        prevItem.id === id ? { ...prevItem, quantity: prevItem.quantity + 1 } : prevItem
      );
  
      const existingItemIndex = updatedItems.findIndex((item) => item.id === id);
  
      if (existingItemIndex === -1) {
        updatedItems.push({ id, quantity: 1 });
      }
  
      localStorage.setItem('cart', JSON.stringify(updatedItems));
      return updatedItems;
    });
  };
  const Decrement = (id: string) => {
    setProdutoCarrinho((prevItems) => {
      return prevItems.map((prevItem) =>
        prevItem.id === id && prevItem.quantity > 1
          ? { ...prevItem, quantity: prevItem.quantity - 1 }
          : prevItem
      );
    });
  };

  

  const removeFromCart = (id: string) => {
    setProdutoCarrinho((prevItems) => {
      const updatedItems = prevItems.filter((prevItem) => prevItem.id !== id);
  
      localStorage.setItem('cart', JSON.stringify(updatedItems));
      return updatedItems;
    });
  };
  

  const contextValue: CartContextType = {
    addToCart,
    removeFromCart,
    setOpenCart,
    openCart,
    produtoCarrinho,
    setProdutoCarrinho,
    Decrement
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

// Hook personalizado para usar o contexto
const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export default useCartContext;
