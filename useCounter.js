import { useState } from "react";

function useCounter(){

    const [count ,setCount] = useState(0);

    const IncrementCount = ()=>{
        setCount(count+1);
    }
    const drecementCount = ()=>{
        setCount(count-1);
    }
    const resetCount = ()=>{
        setCount(0);
    }
    return[count ,IncrementCount,drecementCount,resetCount];
}
export default useCounter