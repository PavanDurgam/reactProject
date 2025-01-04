import React,{useState,useCallback,useEffect}from "react";
import usePageTitle from "./usePageTitle";

const Title = ()=>{
    const [count,setcount] = useState(0);

    usePageTitle(count);
   

    
    return(
        <>
        <h2>useCallBack & react.memo</h2>
        <button onClick={()=>{setcount(count+1)}}>count-{count}</button>
        </>
    )
}
export default React.memo(Title);