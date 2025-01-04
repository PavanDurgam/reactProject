import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useState,useEffect,} from "react";
import {useNavigate} from  "react-router-dom";
const URL ="https://apis.ccbp.in/login"

function A_ForgetPassword (){
    const [sendEmail,setsendEmail] = useState();
    const [alert , setAlert] = useState({status:false,msg:""});
    const navigate = useNavigate();
    const HandleSubmit = (event)=>{
       event.preventDefault();
       const ResetPasswordEmail = sendEmail;
       
       if (sendEmail ){
         setAlert({status:true,msg:""});
         
       }
       else{
        setAlert({status:false,msg:"**Plz Enter Your Email@ddress**"})
       }
      if (sendEmail.length >=8){
        setTimeout(()=>{
            navigate("/login");
            setsendEmail("");
           },3000)
      }
       
       
       
       
    }
    
    return(
        <div><h1>Hii Daddy</h1>
            <div className="d-flex flex-column justify-content-center vh-100 vw-60" >
                  <h3 className="m-3">Enter Phone Number or EmailAddress:</h3>
                <form className="d-flex flex-row justify-content-center" onSubmit={HandleSubmit} >
                    
                         <input
                         type="email"
                         className="Input_edit" 
                         name="sendEmail"
                         placeholder="Enter Your Register mail"
                         id="sendEmail"
                         value={sendEmail}
                         onChange={(e)=>{setsendEmail(e.target.value)}}/>

                         <div className="d-flex flex-row justify-content-center m-2 ">
                            <button className="btn btn-primary" type="submit">
                                Send
                            </button>
                         </div>
                         
                </form>
                        {
                            alert.status?<h2 >{alert.msg}</h2>:<h2 className="alert alert-danger m-4">{alert.msg}</h2>
                         }

               
                
            </div>
       
        
       </div>
    )
}
export default A_ForgetPassword

































       