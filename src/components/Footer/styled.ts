import { styled } from "styled-components";

const styleds = {
  BoxMain: styled.footer`
    width: 100%;
    height: 200px;
    background-color: #000000;
  `,
  BoxContainer: styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    p,
    a {
      color: #fff;
      font-size: 20px;
      font-weight: 400;
      font-family: Arial, Helvetica, sans-serif;
      text-decoration: none;
    }

    a {
      color: #ccc;
    }
  `,
};

export default styleds;
