import styled from "styled-components";

const styleds = {
  MainBox: styled.main`
  position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding:10px 10px;
    

    h2 {
      font-family: var(--font-Poppins);
      font-size: 30px;
      padding-bottom: 15px;
     

    }

    .BoxProducts {
    padding: 10px;
      height: 100%;
      width: 100%;
      display: flex;
      gap: 20px;
      
      
    }
  `,
};

export default styleds;
