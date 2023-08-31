import styled from 'styled-components';

const BoxMain = styled.div`
  background-color: #f8f8f8;
  width: 70%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  width: 100%;

  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
  }
`;

const ProductInfo = styled.div`
  flex: 1;
  margin-left: 10px;
`;

const ProductName = styled.h2`
  color: #333;
  font-size: 20px;
  margin-bottom: 5px;
`;

const ProductPrice = styled.p`
  color: #666;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2980b9;
  }
`;

const TotalPrice = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
`;

const EmptyCartMessage = styled.p`
  font-size: 18px;
  color: #999;
`;

const CartPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CheckoutButton = styled(Button)`
  background-color: #e74c3c;

  &:hover {
    background-color: #c0392b;
  }
`;

const styleds = {
  BoxMain,
  ProductContainer,
  ProductInfo,
  ProductName,
  ProductPrice,
  Button,
  TotalPrice,
  EmptyCartMessage,
  CartPageContainer,
  CheckoutButton,
};

export default styleds;
