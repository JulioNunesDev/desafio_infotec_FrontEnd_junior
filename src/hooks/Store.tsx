import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";

type TCart = {
  openCart: boolean;
  setOpenCart: boolean;
};

type TProducts = {
  nome: string;
  valor: number;
  quantidade: number;
};

export type IProps = {
  AddItem: (item: string) => void;
  RemoveItem: () => void;
  openCart: TCart | boolean;
  setOpenCart: Dispatch<SetStateAction<TCart | boolean>>;
  contador: React.ReactNode | number;
  setContador: Dispatch<SetStateAction<number | undefined>>;
  produtos: TProducts | Array<TProducts>;
};

export const Store = createContext<IProps>({} as IProps);

export const StoreProvide = ({ children }: { children: React.ReactNode }) => {
  const [openCart, setOpenCart] = useState<TCart | boolean>(false);
  const [contador, setContador] = useState<number | undefined>(0);
  const [produtos, setProdutos] = useState<TProducts[]>([]);

  const AddItem = (item: string) => {};
  const RemoveItem = () => {};

  useEffect(() => {
    // Simulando um fetch de um JSON (substitua pela sua lógica real)
    const jsonData = {
      itens: [
        {
          nome: "Coco da Bahia",
          valor: 3.0,
          quantidade: 1,
        },
        {
          nome: "Abóbora",
          valor: 7.5,
          quantidade: 1,
        },
        {
          nome: "Ovo",
          valor: 9.5,
          quantidade: 12,
        },
      ],
    };

    setProdutos(jsonData.itens);
  }, []);

  return (
    <Store.Provider
      value={{
        openCart,
        setOpenCart,
        AddItem,
        RemoveItem,
        contador,
        setContador,
        produtos,
      }}
    >
      <>{children}</>
    </Store.Provider>
  );
};

const UseContextProvider = () => {
  const context = useContext(Store);

  return context;
};

export default UseContextProvider;
