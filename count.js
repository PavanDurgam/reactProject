
import React,{useState,useCallback,useEffect}from "react";
import usePageTitle from "./usePageTitle";

const Title3 = ()=>{
    const [count,incrementCount,decrementCount,resetCount] = usePageTitle();
    console.log(count)
    return(
        <>
        <h2> count {count}</h2>
        <button onClick={incrementCount}>incrementCount</button>
        <button onClick={decrementCount}>decrementCount</button>
        <button onClick={resetCount}>resetCount</button>
        </>
    )
}
export default React.memo(Title3);