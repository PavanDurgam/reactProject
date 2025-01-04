 
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import A_home from './Amazon/AHome'
import A_ForgetPassword from './Amazon/A_ForgetPasswod.js'
import A_register from './Amazon/A_Register'
import AmazonProduct from './Amazon/Aproducts' 
import NotFound from './RoutersComponent/NotFound'
import P_details from './Amazon/AproductDetails'
import A_cart from './Amazon/A_cart'
import FuterProject from './RoutersComponent/FutureProject'
import A_login from './Amazon/A_login'
import LogRegister from './Amazon/LogRegister'



const  App =()=>{
  
  
return(
  
  <div className='align'>
    
    <h3>hii ram</h3>
   
    
        

 
<contextUserProvider>
  <Routes>
  
  <Route path='/Login' element={<LogRegister/>}>
    <Route index  element={<A_login/>}/>
    <Route path='login/register' element={<A_register/>}/>
  </Route>
    <Route path="/" element={<FuterProject/>}>
      <Route index element={<A_home/>}/>
      <Route path='/Product' element={<AmazonProduct/>}/>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/ProductsDetails' element={<P_details/>}/>
      <Route path='/cart' element={<A_cart/>} />
     

    </Route>
    <Route path='/ForgetPassword' element={<A_ForgetPassword/>}/>

    
    
   
    
    
    
  </Routes>
</contextUserProvider>
   
  </div>
 
  
)
}
  

export default App