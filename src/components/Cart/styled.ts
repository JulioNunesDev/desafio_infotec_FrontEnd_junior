import { styled } from "styled-components";

const styleds = {

 
  CartBox: styled.div`
    position: absolute;
    height: 500px;
    max-height: auto;
    width: 300px;
    background-color: #fff;
    left: 100px;
    top: 0;
    z-index: 100;
    box-shadow: var(--sombra);
    border-radius: 8px;
    h1 {
      color: white;
    }

    .top {
      width: 100%;
      height: auto;
      background-color: #fff;
      text-align: center;
      padding: 10px;
      border-bottom: 2px solid rgba(0, 0, 0, 0.1);
      h2 {
        font-size: 25px;
        font-family: var(--font-Poppins);
      }
    }
  `,
  BoxContent: styled.div`
    
  `,
};

export default styleds;
