import React,{useState} from "react";
import useCounter from "./useCounter";

const SecondCount = ()=>{
    const [count,IncrementCount,drecementCount,resetCount] = useCounter();


    return(<div>
        <h2>count == {count}</h2>
        <div>
            <button onClick={IncrementCount}>increment </button>
            <button onClick={drecementCount}>drecement </button>
            <button onClick={resetCount}>reset</button>
        </div>
    </div>)
}
export default SecondCount