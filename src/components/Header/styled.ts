import { styled } from "styled-components";
const styleds = {
  BoxMain: styled.header`

  a{
  text-decoration: none;
}


    width: 100%;
    height: 75px;
    background-color: #fafafa;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 100;

    .logo {
      position: relative;

      
      h2 {
        font-size: 30px;
        color: #000000;
        font-weight: bold;
        font-family: var(--font-Poppins);
      }
    }
    nav {
      max-width: 1200px;
      display: flex;
      align-items: center;
      height: 70px;
      width: auto;
      gap: 50px;

      ul {
        display: flex;
        gap: 20px;
      }

      li {
        list-style: none;

        a {
          color: #000000;
          text-decoration: none;
          font-size: 22px;
          font-family: var(--font-Poppins);
          transition: all.2s ease-in;
          font-weight: bold;

          &:hover {
            color: var(--color-primary);
          }
        }
      }

      .cart {
      position: relative;

      button {
        border: none;
        background-color: #fff;
        cursor: pointer;
      }

      .countCart {
        background-color: red;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 23px;
        right: 23px;

        p {
          font-family: var(--font-Jost);
          color: #fff;
        }
      }
    }
    }

    
  `,
};

export default styleds;
