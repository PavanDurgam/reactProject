import React from "react";
import { Data } from "./UserData";
import { useParams } from "react-router-dom";
function UserDetails (){
    const param = useParams();
   const{UserId}= param;
   console.log(param)
   const filteredData = Data.find((eachUser)=>eachUser.id == UserId);
   if (!filteredData){
    return<div> User not found</div>
   }

    return(
        <div style={{backgroundColor:"blue"}}>
            <h1 >UserDetails</h1>
            <h3>{filteredData.title}</h3>
            <img src={filteredData.image_url}/>
            <h3>{filteredData.author}</h3>
            <img src={filteredData.avatar_url}/>
           
        
        </div>
    )
}
export default UserDetails