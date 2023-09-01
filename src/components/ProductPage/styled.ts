import styled from "styled-components";
const styleds = {
  BoxMain: styled.div`
    background-color: #ccc;
    width: 100%;
    height: 100vh;
    box-shadow: var(--sombra);
    display: flex;
    justify-content: center;
    padding: 50px;
    background-color: #85ffbd;
    gap: 50px;
    background-image: linear-gradient(
      45deg,
      #85ffbd 0%,
      #fffb7d 50%,
      #fbab7e 100%
    );
    flex-wrap: wrap;

    .image {
      width: 600px;
      height: max-content;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: var(--sombra);
      border-radius: 8px;
      background-color: #fff;
      padding: 10px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    /* CHECKBOX STYLE */
    .checkbox-wrapper-65 *,
    .checkbox-wrapper-65 ::after,
    .checkbox-wrapper-65 ::before {
      box-sizing: border-box;
    }

    .checkbox-wrapper-65 .cbx {
      position: relative;
      display: block;
      float: left;
      width: 18px;
      height: 18px;
      border-radius: 4px;
      background-color: #780;
      background-image: linear-gradient(#0f698d, #1d3c6b);
      box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.15),
        inset 0 -1px 1px rgba(0, 0, 0, 0.15);
      transition: all 0.15s ease;
    }

    .checkbox-wrapper-65 .cbx svg {
      position: absolute;
      top: 3px;
      left: 3px;
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke: #fff;
      stroke-width: 2;
      stroke-dasharray: 17;
      stroke-dashoffset: 17;
      transform: translate3d(0, 0, 0);
    }

    .checkbox-wrapper-65 .cbx + span {
      float: left;
      margin-left: 6px;
    }

    .checkbox-wrapper-65 {
      user-select: none;
    }

    .checkbox-wrapper-65 label {
      display: inline-block;
      cursor: pointer;
    }

    .checkbox-wrapper-65 input[type="checkbox"] {
      display: none;
      visibility: hidden;
    }

    .checkbox-wrapper-65 input[type="checkbox"]:checked + .cbx {
      background-color: #606062;
      background-image: linear-gradient(#e84118, #e89120);
    }

    .checkbox-wrapper-65 input[type="checkbox"]:checked + .cbx svg {
      stroke-dashoffset: 0;
      transition: all 0.15s ease;
    }

    /* CHECKBOX STYLE */
    .infors {
      height: max-content;
      width: 600px;
      background-color: #fff;
      border-radius: 8px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;

      h2 {
        font-size: 40px;
        font-family: var(--font-Bebas);
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      }

      .price {
        padding: 15px 0;

        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        p {
          color: black;
          font-weight: 600;
          font-family: var(--font-Poppins);
          font-size: 22px;
        }
      }

      .resume {
        padding: 10px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        p {
          color: black;
          font-weight: 500;
          font-family: var(--font-Poppins);
          font-size: 18px;
        }
      }

      .btn {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;

        @media only screen and (max-width: 590px) {
          display: flex;
          gap: 10px;
          text-align: center;
          button,
          a {
            font-size: 15px;
          }
        }
      }
      button,
      a {
        border: none;
        text-decoration: none;
        text-align: none;
        font-weight: 600;
        font-family: var(--font-Poppins);
        font-size: 20px;
        background-color: var(--color-primary);
        padding: 15px;
        border-radius: 8px;
        color: #fff;
        box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.2);
        transition: all 0.5s ease-in;
        cursor: pointer;

        &:hover {
          box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
        }
      }
    }
  `,
};

export default styleds;
