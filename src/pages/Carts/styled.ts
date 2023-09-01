import styled from "styled-components";

const styleds = {
  Main: styled.main`
    width: 100vw;
    height: auto;

    .header-input {
      background-color: #f0932b;
      width: 100%;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;

      div {
        gap: 20px;
        display: flex;
        align-items: center;
        width: 500px;
        height: 45px;

        input {
          width: 100%;
          height: 100%;
          border: none;
          padding-left: 15px;
          border-radius: 5px;
          font-size: 18px;
          outline: none;
        }
        button {
          color: white;
          background-color: var(--color-primary);
          padding: 8px;
          border: none;
          border-radius: 5px;
          font-family: var(--font-Jost);
          font-weight: bold;
          cursor: pointer;
        }
      }
    }

    .products {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;
      flex-wrap: wrap;

      .productsStyles {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 300px;
        height: 300px;
        border-radius: 8px;
        background-color: #fff;
        box-shadow: 2px 2px 2px 3px rgba(0, 0, 0, 0.3);
        gap: 5px;

        img {
          width: 120px;
          height: 120px;
          object-fit: cover;
          border-radius: 50%;
        }

        p {
          font-size: 20px;
          font-family: var(--font-Bebas);
        }
      }
    }
  `,
};

export default styleds;
