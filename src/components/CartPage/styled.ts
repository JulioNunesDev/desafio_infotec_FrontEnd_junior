import { styled } from "styled-components";

const styleds = {
  BoxMain: styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    gap: 50px;
    padding-top: 50px;
    flex-wrap: wrap;

    @media screen and (max-width: 1366px) {
      width: 100%;
      height: auto;
      padding-top: 50px;
      flex-direction: column;
    }

    .BoxContent {
      width: max-content;
      height: 700px;
      background-color: #f6f6f6;
      border: 1px solid rgba(0, 0, 0, 0.3);
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 20px;

      @media screen and (max-width: 1366px) {
        display: flex;

        flex-wrap: wrap;

        height: auto;
      }

      .products {
        background-color: #fafafa;
        box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);
        display: flex;
        align-items: center;
        gap: 40px;
        width: 900px;
        height: 150px;
        padding: 20px;
        border-radius: 5px;
        flex-wrap: wrap;

        @media screen and (max-width: 1366px) {
          padding: 0px;
          gap: 0px;
          flex-wrap: wrap;
          display: flex;
          height: auto;
          flex-direction: row;
          width: auto;

          .image {
            width: auto;
            height: auto;
          }

          .products-price {
            display: flex;
            flex-direction: column;

            width: auto;
            height: 100%;
            flex-wrap: wrap;
            display: flex;
          }
        }

        p {
          font-size: 16px;
          font-family: var(--font-Roboto);
        }

        .custom-color-btn-price {
          color: var(--color-primary);
          font-family: var(--font-Roboto);
          font-weight: 600;
        }

        .image {
          border-radius: 50%;
          height: 100px;
          width: 100px;
          background-color: red;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          border-radius: 50%;
        }
        .products-price {
          display: flex;
          align-items: center;
          height: 100%;
          display: flex;
          gap: 30px;

          h2 {
            font-family: var(--font-Roboto);
          }
        }

        .btn {
          display: flex;
          gap: 10px;
          display: flex;
          justify-content: center;
          button {
            border: none;
            border-radius: 50%;
            padding: 5px;
            cursor: pointer;
            transition: 0.2s ease-in;
            &:hover {
              color: var(--color-primary);
            }
          }
        }
        .outhers-btn {
          display: flex;
          gap: 20px;
          align-items: center;

          p {
          }

          button {
            border: none;
            background-color: transparent;
            padding: 4px;
            cursor: pointer;
            transition: 0.2s ease-in;
            &:hover {
              color: var(--color-primary);
            }
          }
        }
      }
    }

    .boxcheckout {
      width: 500px;
      height: max-content;
      background-color: #f6f6f6;
      border: 1px solid rgba(0, 0, 0, 0.3);
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      gap: 25px;
      padding: 20px;

      .tittle-products {
        display: flex;
        flex-direction: column;
        gap: 12px;

        h3 {
          font-size: 26px;
          text-align: center;
          font-family: var(--font-Jost);
        }
        .supplier {
          p {
            color: #30336b;
            font-size: 15px;
            font-family: var(--font-Bebas);
          }
        }
      }

      .priceTotal {
        p {
          font-size: 30px;
          font-family: var(--font-Jost);
        }
      }

      .btns {
        display: flex;
        justify-content: center;
        gap: 15px;
        font-size: 15px;

        button,
        a {
          cursor: pointer;
          text-decoration: none;
          padding: 4px;
          border: none;
          padding: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all.2s ease-in;
          font-family: var(--font-Bebas);
          color: white;
          font-weight: 600;
          background-color: var(--color-primary);
          border-radius: 8px;
          &:hover {
            color: black;
          }
        }
      }
    }
  `,
};

export default styleds;
