import React from "react";
import { useState,useEffect } from "react";

const Info = "www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
const ParticeUseEffect =()=>{


    const [data,setdata]=useState([]);
    const [loading,setloading] = useState(false);
    const [isError,setIsError] = useState({status:false,msg:""})

    const FetchUserInfo = async(infourl)=>{
        try {
            setIsError({status:false,msg:""});
            setloading(true);
            const reps = await fetch(infourl);
            const fectchData = await reps.json();
            console.log(fectchData);
            setdata(fectchData);
            setloading(false);
            setIsError({status:false,msg:""});



            if (reps.status===404)
                throw new Error("data not found");

        }
        
       
        catch(error){
            console.log(error.message)
            setloading(false)
            setIsError({status:true,msg: error.message||"something went wrong plzz try again "});

        }
        
    }

    useEffect(()=>{
        FetchUserInfo(Info);

    },[]);

    if (loading)
        return <div style={{textAlign:"center"}}>
            <h1 style={{color:"blue"}}>loading.......</h1>
        </div>


    if (isError?.status)
        return<div style={{textAlign:"center"}}>
            <h1 style={{color:"red"}}>{isError.msg}</h1>
        </div>
    return(
        <div>
            <h1>hii dada</h1>
            <h1> list of names</h1>
            <ul>
                {
                    data.map((eachUser)=>{
                        const {idDrink,strDrink} = eachUser

                        return <li key={idDrink}>
                            <div>
                                <h1>{strDrink}</h1>
                                
                            </div>
                                </li>
                    })
                }
            </ul>
        </div>
    )
}
export default ParticeUseEffect