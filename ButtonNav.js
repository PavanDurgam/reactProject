import React from "react";
import {useNavigate } from "react-router-dom"
function ButtonNavbar (){
    const navigator = useNavigate();

    return(
        <div><h1>Suceesfully completed</h1>
        <button onClick={()=>{navigator("/")}}>Back</button></div>
    )
}
export default ButtonNavbar