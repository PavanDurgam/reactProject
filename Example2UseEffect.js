import React, { useEffect, useState } from "react";


const Url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=l"
const Example2 = () =>{
    const [data,setDrinksData] = useState([]);



    const FetchDrinnnnksData = async (Drinkurl) =>{
        const responses =  await fetch(Drinkurl);
       const data = await responses.json();
       setDrinksData(data);
    }
    useEffect( ()=>{
        FetchDrinnnnksData(Url)
    },[])

    return(
        <div>
            <h1>love you dad</h1>
            <div>
                <h1 style={{textAlign:"center", color:"blue"}}>Order Your Drink </h1>
                <ul>
                {
                    data.map((eachitem) => {
                    
                        const {id,strDrink} = eachitem;
                        return  <li key="id">{strDrink}</li>
                       
                    })
                }
            </ul>
            </div>
        </div>
    )
}
export default Example2