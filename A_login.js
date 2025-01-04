import React,{useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import pic2 from '../Images/pic2.png'
import { useNavigate,Link, NavLink } from "react-router-dom";

const A_login =()=>{
  const [userName,setUsername]=useState("");
  const [password,setPassword]=useState("");
  
 
  const navigate = useNavigate();
  

  const HandleSubmit=(event)=>{
     event.preventDefault();
     const Details = {
      Name:userName,
      Password:password,
     }
     if (userName.length >=6 && password.length >=6){
      setTimeout(() => {
        navigate("/");
      }, 3000);
     }
    }

  return(
    <>
    <div className="container ">
      <div className="row d-flex flex-row justify-content-center">
        <div className=" col-12 col-md-4 col-lg-6 col-xl-4 col-xxl-4  d-flex flex-column justify-content-center ">
          <div className="d-flex flex-column justify-content-center login_card ">
           <form className=""  onSubmit={HandleSubmit} >        
                        <input  type="text"
                        name="userName" className=" Input_edit"
                        placeholder="UserName"
                        id="userName"
                       
                        onChange={(e)=>{setUsername(e.target.value)
                            
                        }}
                        />

                         <br/><br/>

                         <input
                         type="password"
                         className="Input_edit" 
                         name="password"
                         placeholder="password"
                         id="passsword"
                         onChange={(e)=>{setPassword(e.target.value)}}/>
                        <div>
                        <button type="submit" disabled={false} className="btn btn-primary m-3">
                          login

                        </button>
                        <div>
                             <NavLink to="/ForgetPassword">ForgetPassword</NavLink>
                        </div>
                        </div>
                        
                      

                        
                        

            </form>
          </div>

        </div>
        <div className=" d-none d-md-block  col-md-4 col-lg-6 col-xl-8 col-xxl-8 d-flex flex-row justify-content-space around">
         <img  src={pic2}/>

        </div>

      </div>

    </div>
   

    </>
  )
}
export default A_login