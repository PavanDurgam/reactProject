import React,{useRef,useState , useEffect} from "react";


const USEREFHOOK=()=>{
    const pavan = useRef("");

    useEffect(()=>{
        console.log(pavan)
      
    },)
    const focus = ()=>{
        pavan.current.focus();

    }


    return(
        <div>
            <h1 ref={pavan}>hello ram</h1>
            <input type="text" name="name" id="name"  ref={pavan}  />
            <input type="number" name="gfuyft" id="nameses"   />
           <h3>vugfytdtd</h3>
            <button onClick={focus}>add input</button>
        </div>
    )
}
export default USEREFHOOK