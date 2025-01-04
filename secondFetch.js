import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React,{useState,useEffect} from "react";
import FetchedFun from "./useFetchHook";

const URL = "https://jsonplaceholder.typicode.com/users"

const SecondFetchHook =()=>{
    
const [usersData,isLoading,isError] = FetchedFun(URL);
   

    if (isLoading === true){
        return <div><h3>Loading.......</h3></div>
    }
    if (isError.Status === true){
        return<div>{isError.msg}</div>
    }

    return(<div style={{textAlign:"center"}}>
        <h3>user</h3>
        {
            usersData.map((eachUser)=>{

                return <li key={eachUser.id}>
                    {eachUser.name}

                </li>
            })
            
        }

    </div>)
}
export default SecondFetchHook