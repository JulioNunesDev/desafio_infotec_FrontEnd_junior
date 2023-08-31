import styled from 'styled-components'
const styleds = {
BoxMain: styled.div`
background-color: #f4f4f4;
width:100%;
height: 100%;
box-shadow: var(--sombra);
display: flex;
justify-content: space-around;
padding-top: 20px;

.observation-options{
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;

    div{
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: center;
    }
}

.infors{
    height: max-content;
    width: 600px;
background-color: #fff;
border-radius: 8px;
padding: 15px;
display: flex;
flex-direction: column;
gap: 10px;

    h2{
    font-size: 40px;
    font-family: var(--font-Poppins);
    border-bottom: 1px solid rgba(0,0,0,0.2);

    }

.price{
 
    padding: 15px 0;
    
    display: flex;
    justify-content: space-between;
    ;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    p{
        color: black;
        font-weight: 600;
        font-family: var(--font-Poppins);
        font-size: 22px;
    }
}

.resume{
    padding: 10px 0;
    border-bottom: 1px solid rgba(0,0,0,0.2);
p{
    color: black;
        font-weight: 500;
        font-family: var(--font-Poppins);
        font-size: 18px;
}
}

.btn{
   margin-top: 20px;
   display: flex;
   justify-content: space-between;
    a{
        text-decoration: none;
        text-align: none;
        font-weight: 600;
        font-family: var(--font-Poppins);
        font-size: 20px;
        background-color: var(--color-primary);
        padding: 15px;
        border-radius: 8px;
        color: #fff;
        box-shadow: 2px 2px 5px 2px rgba(0,0,0,0.2);
        transition: all .5s ease-in;
    
        &:hover{
            box-shadow: 2px 2px 2px  rgba(0,0,0,0.4);
        }
    }
}
}



.image{
width: 600px;
height: 500px;
display: flex;
justify-content: center;
align-items: center;
box-shadow: var(--sombra);
border-radius: 8px;
background-color: #fff;

img{
    width: 100%;
height: 100%;
object-fit: contain;

}
}


`
}

export default styleds;