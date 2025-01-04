import React,{useMemo,useState,useEffect} from "react";


const  MemoPratice = ()=>{
    const [input ,setInput] = useState("");
    const [dark,setDark ] = useState(false);
    const ThemSet = useMemo(()=>{
        return {
            backgroundColor:dark ? "black":"red",
            color:dark ?"green": "black",
        }

    })
    const DoubleNumber = useMemo(()=>{
        return slowFuction(input)},[input]);

    useEffect(()=>{
        console.log(ThemSet);
    },[ThemSet])
    return(<>
    <input type="number" id="number" name="number"  onChange={(e)=>setInput(Number(e.target.value))} value={input} />
    <h3 style={ThemSet}>the enter number is:{DoubleNumber} </h3>

    <div>
        <button onClick={()=>setDark(!dark)}>CHANGE BG</button>
    </div>
    
    </>)


}
const slowFuction = (input)=>{

    for (let a=0;a<1000000000;a++){


    }
    console.log("hsjgdkjhghA")
    return input*input
    
    }
export default MemoPratice