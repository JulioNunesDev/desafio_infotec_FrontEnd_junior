import styled from 'styled-components'
const styleds = {
BoxMain: styled.div`
background-color: #f4f4f4;
width: 70%;
height: 100%;
box-shadow: var(--sombra);
display: flex;
align-items: center;
justify-content: space-evenly;

p{
color: var(--color-text);
font-size: 18;
font-family: var(--font-Jost);
font-weight: 600;
}
.btn{
width: 100%;
height: auto;

button{
padding: 10px;
}
}
.teste{
    width: 300px;
    height: 300px;
    background-color: blue;
img{
    width: 60px;
    height: 60px;
    object-fit: contain;
}
}
`
}

export default styleds;