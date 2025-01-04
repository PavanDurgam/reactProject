import React from "react";
import {Data} from "./UserData";
import { Link } from "react-router-dom";
function Users (){
    return(
        <div style={{backgroundColor:"blueviolet"}}>
            <h1>Users</h1>
            <p>nl k weg gutou</p>
                {
                    Data.map((eachUser)=>{
                        const {id,title,image_url} = eachUser;
                        return <Link to={`/User/${id}`}  key={id}>
                           <h4>{title}</h4>
                          <img src={image_url}/>

                       </Link>
                    })
                }
           
        </div>
        
    )
}
export default Users