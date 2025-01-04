import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React,{useState,useEffect} from "react";
import FetchedFun from "./useFetchHook";


const URL = "https://apis.ccbp.in/blogs"

const FirstFetchHook =()=>{
    const [postsData,isLoading,isError] = FetchedFun(URL);
    

    if (isLoading === true){
        return <div><h3>Loading.......</h3></div>
    }
    if (isError.Status === true){
        return<div>{isError.msg}</div>
    }

    return(<div style={{textAlign:"center"}}>
        <h3>posts</h3>
        {
            postsData.map((eachUser)=>{

                return <li key={eachUser.id}>
                    {eachUser.title}
                <img src={eachUser.image_url}/>
                </li>
                
            })
            
        }

    </div>)
}
export default FirstFetchHook