import React,{useState,useEffect,useContext} from "react";

import pic2 from '../Images/pic2.png'
import { Link, useNavigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function Register_form (){         
 
    const [userName,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [reEnterpassword,setReEnterPassword]=useState("");
    const [Email,setEmail] = useState("");
    const [Details,setDetails] = useState("");
    const [isButtonDisable ,setIsButtonDisable] = useState(true);
    const [passwordMatch , setPasswordMatch] = useState({
      isMatch:true,
      msg:""

    });
    const navigqte = useNavigate();
    
    const HandleSubmit = (event)=>
      {
       event.preventDefault();
        const data= {
          Name:userName,
          password:password,
          reEnterpassword:reEnterpassword,
          mail:Email,
       }
       
       if (password === reEnterpassword){
        setPasswordMatch({isMatch:true,msg:"Sucess!"})
        setTimeout(() => {
          navigqte("/");
        }, 3000);
       }else{
        setPasswordMatch({isMatch:false,msg:"Password doesn't matched"});
       }
        
     
     }
   
     useEffect(()=>{
      if (userName.c >= 6 && password.length >=8 && Email.length >=8 && reEnterpassword.length>=8){
        (setIsButtonDisable ( false));
      }
     },[userName,password,Email,reEnterpassword]);
    
    return(
        < >
          <div className="container ">
      <div className="row d-flex flex-row ">
        <div className=" col-12 col-md-4 col-lg-6 col-xl-4 col-xxl-4  d-flex flex-column justify-content-center ">
          <div className="d-flex flex-column justify-content-center login_card ">
           <form className=""  onSubmit={HandleSubmit} >  
                      
                        <div>
                          <label for="userName" className="d-flex flex-row m-2 A_label">UserName:</label>
                          <input  type="text"
                            name="userName" className=" Input_edit"
                            placeholder="UserName"
                            id="userName"
                          
                            onChange={(e)=>{setUsername(e.target.value)
                                
                            }}
                            />
                        </div>      
                       
                        <div>
                          <label  for="password" className="d-flex flex-row m-2 A_label ">password:</label>
                          <input  type="password"
                            name="password" className=" Input_edit"
                            placeholder="Password"
                            id="password"
                          
                            onChange={(e)=>{setPassword(e.target.value)
                                
                            }}
                            />
                        </div>  
                        <div>
                          <label for="Email" className="d-flex flex-row m-2 A_label">Email:</label>
                          <input  type="email"
                            name="Email" className=" Input_edit"
                            placeholder="email@gmail.com"
                            id="Email"
                          
                            onChange={(e)=>{setEmail(e.target.value)
                                
                            }}
                            />
                        </div> 
                        <div>
                          <label for="re-entered-password" className="d-flex flex-row m-2 A_label">password:</label>
                          <input  type="password"
                            name="re-entered-password" className=" Input_edit"
                            placeholder="re-entered-password"
                            id="re-entered-password"
                          
                            onChange={(e)=>{setReEnterPassword(e.target.value)
                                
                            }}
                            />
                        </div> 
                         
                        <button type="submit" disabled={isButtonDisable} className="btn btn-primary m-3">
                          login

                        </button>
                        {passwordMatch.isMatch?<h2 className="alert alert-warning">{passwordMatch.msg}</h2>:<h3>{passwordMatch.msg}</h3>}
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
export default Register_form




























































