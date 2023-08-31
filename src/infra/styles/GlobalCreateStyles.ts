import { createGlobalStyle } from "styled-components";

export const GlobalCss = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Jost:wght@300;400;600&family=Poppins:wght@300;400;500&family=Roboto:wght@300;400;700&display=swap');


*{
    margin: 0;
padding: 0;
box-sizing: border-box;
}

:root{
--font-Jost: 'Jost', sans-serif;
--font-Poppins: 'Poppins', sans-serif;
--font-Roboto: 'Roboto', sans-serif;
--font-Bebas:  'Bebas Neue', sans-serif;


--color-primary: #e84118;
--color-text: #636e72;

--sombra:-1px 7px 23px 5px rgba(0, 0, 0, 0.34);
}

background-color: #444;
width: 100%;
height: 100%;

`;
