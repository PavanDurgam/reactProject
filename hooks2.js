import {useState,useEffect} from "react";


const Hooks2=() =>{
    const [count, setcount] = useState(0);
    const [pageWidth,setPageWidth] = useState(window.innerWidth)

    useEffect(  () => {
        

const changeCount=()=>{
    setcount(count+1)
}

    return(
        <div>
            <h1>hello dad</h1>
            <h1>{count}</h1>
           <h1>{pageWidth}</h1>
            <button onClick={changeCount}>+</button>

        </div>

    )
}
export default Hooks2