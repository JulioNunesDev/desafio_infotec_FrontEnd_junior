import {useEffect, useState} from 'react'
import useProductContext from '../../hooks/Products';
import S from './styled'
import useCartContext from '../../hooks/Store';
const CartPage = () => {
  const { produtoCarrinho, removeFromCart } = useCartContext();
  const { productList } = useProductContext();
  const [valueTotal, setValueTotal] = useState<number>(0);

  useEffect(() => {
    const total = produtoCarrinho.reduce((acc, item) => {
      const product = productList.find((prevItem) => prevItem.id === item.id);
      const productValue = product.price * item.quantity;
      return acc + productValue;
    }, 0);

    setValueTotal(total);
  }, [produtoCarrinho, productList]);

  return (
    <S.BoxMain>
      {produtoCarrinho.map((item) => {
        const product = productList.find((prev) => prev.id === item.id);
        return (
          <div className="teste" key={item.id}>
            <img src={product.image} style={{ width: '50%' }} alt="" />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            

            <div className="btn">
              <button onClick={() => removeFromCart(item.id)}>Remover</button>
            </div>
          </div>
        );
      })}
      <div className="priceTotal">
        <p>{valueTotal.toFixed(2)}</p>
      </div>
    </S.BoxMain>
  );
};

export default CartPage;
