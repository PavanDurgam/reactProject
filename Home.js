import React from "react";
import { useNavigate } from "react-router-dom";
import './abot.css'
function Home (){
    const navigate = useNavigate();
    const LoginInfo = ()=>{
        navigate("/Sucess");
    }
    return(
        <div><h1>Home</h1>
        <img className="about-image" src="https://w7.pngwing.com/pngs/20/924/png-transparent-computer-icons-home-home-blue-home-icon-directory-thumbnail.png"/>
        <button onClick={LoginInfo}>Login </button>
       </div>
    )
}
export default Home