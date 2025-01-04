import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Outlet,useNavigate } from "react-router-dom";

function LogRegister (){
    const navigate = useNavigate();
    const HandleLogin=()=>{
        navigate("/login")
    }
    const HandleRegister=()=>{
        navigate("login/register")
    }
    return(
        <div>
            <h1>Your at logrigitser</h1>
            <nav className="d-flex flex-row justify-content-center">
                <button className="btn btn-primary m-2" onClick={HandleLogin} >
                    Login_form
                </button>
                <button className="btn btn-warning m-2" onClick={HandleRegister} >
                    Register_form
                </button>
            </nav>
            <Outlet/>
       </div>
    )
}
export default LogRegister