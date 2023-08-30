import { useState, useEffect } from 'react';


type T = {
    nome: string
    valor: number
    quantidade: number
}
function ValoresComponent() {
  const [produtos, setProdutos] = useState<T[]>([]);

  useEffect(() => {
    // Simulando um fetch de um JSON (substitua pela sua lógica real)
    const jsonData = {
      itens: [
        {
          nome: 'Coco da Bahia',
          valor: 3.00,
          quantidade: 1
        },
        {
          nome: 'Abóbora',
          valor: 7.50,
          quantidade: 1
        },
        {
          nome: 'Ovo',
          valor: 9.50,
          quantidade: 12
        }
      ]
    };

    setProdutos(jsonData.itens);
  }, []);

}



export ValoresComponent, produtos,  setProdutos;
