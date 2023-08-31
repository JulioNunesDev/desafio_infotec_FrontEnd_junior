import styled from "styled-components";

const styleds = {
  MainBox: styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 10px 10px;
    display: flex;

    .BoxProducts {
      display: flex;
      flex-direction: column;
      background-color: #f5f6fa;
      height: 100lvh;
      width: 1200px;
      margin: 0 auto;
      gap: 20px;
      padding: 10px;
      border: 2px solid rgba(0, 0, 0, 0.1);
      border-radius: 10px;

      @media screen and (max-width: 786px) {
        height: 100%;
      }

      h2 {
        font-family: var(--font-Bebas);
        font-size: 35px;
        font-weight: bold;
        padding-bottom: 10px;
        color: var(--color-primary);
        border-bottom: 2px solid rgba(0, 0, 0, 0.1);
      }
    }

    .productsMap {
      display: flex;
      justify-content: center;
      gap: 10px;
      flex-wrap: wrap;
    }
  `,
};

export default styleds;
