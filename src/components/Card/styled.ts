import styled from "styled-components";
const styleds = {
  MainBox: styled.main`
    background-color: #fff;
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    -webkit-box-shadow: -1px 7px 23px 5px rgba(0, 0, 0, 0.34);
    box-shadow: -1px 7px 23px 5px rgba(0, 0, 0, 0.34);
    border-radius: 5px;
    cursor: pointer;
    position: relative;

    &:hover .addCart {
         opacity: 1;
         z-index: 10;
        }

   
    .addCart {
      position: absolute;
      right: 15px;
      top: 10px;
      padding: 10px;
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-content: center;
      cursor: pointer;
      opacity: 0;
      border: none;
      transition: all .2s ease-in;

      &:hover{
        background-color: rgba(0, 0, 0, 0.4);
    }
    }
  `,
  BoxContent: styled.div`
    width: 100%;
    height: auto;

    .image {
      width: 100%;
      height: auto;
      background-position: center;

     

      img {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        width: 100%;
        height: 300px;
        object-fit: contain;
        object-position: center;
        transition: all .2s ease-in;

        &:hover {
          filter: blur(1px);
         
        }
        
      }
    }

    .tittle {
      width: 100%;
      height: auto;
      padding: 0 7px;
      h2 {
        font-family: var(--font-Poppins);
        font-size: 22px;
        color: #222222;
      }
    }
    .price {
      width: 100%;
      height: auto;

      p {
        font-family: var(--font-Poppins);
        font-size: 19px;
        color: var(--color-primary);
        font-weight: 300;
      }
    }
  `,
};

export default styleds;
