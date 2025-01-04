import React from "react";
import { useNavigate } from "react-router-dom";

function Sucess (){
    const navigate = useNavigate();
    const navigateToHome =  ()=>{
        navigate('/')
    }
    return(
        <div className="name"><h1>your loged sucessful</h1>
        <button onClick={navigateToHome}>
            Home
        </button>
       
     </div>  
    )
}
export default  Sucess