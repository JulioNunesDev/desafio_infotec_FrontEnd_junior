import styled from "styled-components";
const styleds = {
  MainBox: styled.main`
    background-color: #f2f2f2;
    width: 350px;
    height: 340px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    cursor: pointer;
    padding: 30px;
    box-shadow: var(--sombra);
   
    a {
      text-decoration: none;
    }

    .tittle {
      width: 100%;
      height:max-content;
      display: flex;
      align-items: center;
      
      justify-content: space-between;
      padding: 10px 15px;
      gap: 10px;

      h3 {
        font-family: var(--font-Jost);
        font-size: 25px;
        color: #222222;
        font-weight: 600;
        text-align: center;
      }
      p {
        font-family: var(--font-Poppins);
        font-size: 20px;
        color: var(--color-primary);
        font-weight: 400;
        text-align: right;
      }
    }

    .resume {
      p {
        font-family: var(--font-Poppins);
        font-size: 15px;
        color: #444;
        font-weight: 400;
        text-align: right;
        text-align: left;
        text-justify: inter-word;
      }
    }
  `,
  BoxContent: styled.div`
    width: 100%;
    height: max-content;

   

    .image {
      width: 100%;
      height: auto;

      img {
        border-radius: 20px ;
        width: 300px;
        height: 250px;
        object-fit: cover;

        transition: all 0.2s ease-in;

        &:hover {
          filter: blur(1px);
        }
      }
    }
  `,
};

export default styleds;
