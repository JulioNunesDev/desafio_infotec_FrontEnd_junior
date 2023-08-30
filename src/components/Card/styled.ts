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
   
  `,
  BoxContent: styled.div`
    width: 100%;
    height: auto;
   
    a{
      text-decoration: none;
    }
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
      padding: 7px 7px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      
     
      p {
        font-family: var(--font-Poppins);
        font-size: 22px;
        color: #222222;
        font-weight: 300;

        &:nth-child(2){
          color: var(--color-text);
        }
    }  }
`
    
};

export default styleds;
