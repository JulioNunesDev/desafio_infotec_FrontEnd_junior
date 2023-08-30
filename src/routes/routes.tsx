import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/home';
import Header from '../components/Header';
import Product from '../pages/Product/Index';
    

import S from './styled'
import Footer from '../components/Footer';
function AppRoutes(){
   
  

   
    return (
   
        <BrowserRouter>
        <Header />
        <S.MainBox>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/product' element={<Product/>}/>
            </Routes>
        </S.MainBox>
        <Footer/>
        </BrowserRouter>
       
        )
}

export default AppRoutes;