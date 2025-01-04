import {useState,useEffect} from "react";


 function usePageTitle  () {
    const [count ,setCount] = useState(0);

    const incrementCount = ()=>{
        setCount(count+1);
    }
    const decrementCount = ()=>{
        setCount(count-1);
    }
    const resetCount = ()=>{
        setCount(0);
    };
   return [incrementCount,decrementCount,resetCount,count]
   
 }
 export default usePageTitle