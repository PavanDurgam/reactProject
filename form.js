import { useState } from "react";


const FormsReact=()=>{
    const [surname,setsurname ]=useState("");
    const [email,setemail ]=useState("");
    const [password,setpassword ]=useState("");



   
const reload=(event)=>{
    event.preventDefault();
    let details={
        password:password,
        surname:surname,
        email:email

    }
    console.log(details)
}


    return(
        <div>
            <form onSubmit={reload}>
                <div>
                <input 
                type="text "
                name= "surname"
                id ="surname"
                placeholder="enter your name "
                value={surname}
                onChange={(e)=>setsurname(e.target.value)}

                    
                    />

                </div>
                <br/>
                
                <div>
                <input 
                type="email "
                name= "email"
                id ="email"
                placeholder="enter your e mail "
                value={email}
                onChange={(e)=>setemail(e.target.value)}
                
                    
                    />
                </div>
                <br/>
                <div>
                    <input 
                type="password"
                name= "password"
                id ="password"
                placeholder="enter your Password"
                value={password}
                onChange={(e)=>setpassword(e.target.value)}
                
                    
                    />
                </div>
                <button type="submit" >
                    submit
                </button>
                
            </form>
        </div>
    )
}
export default FormsReact