import { useState } from "react";




const YoutubeHooks =()=>{
  const   [data , setdata]=useState(true);


    const handleChanges=()=>{
     setdata(!data)
     console.log("hlo")
    }
return(
    <div>
        <button onClick={handleChanges}> {data?"show Surname":"hideSurname" }</button><br/>


        <p>pavan{data? 
        <h1>durgam</h1>   :<p>hello</p>}</p>

       


    </div>
)

}
export default YoutubeHooks