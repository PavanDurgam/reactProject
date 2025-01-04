import { useEffect,useState } from "react";

const FetchedFun = (URL)=>{
    const [Data,setData] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [isError,setIsError] = useState({Status:false,msg:"something worng"});


    const UserFetched = async () =>
        { 
            setIsError({Status:false});
            setIsLoading(true);
            try{
                const  response = await fetch(URL);
                const data = await response.json();
                setData(data)
                console.log(response);
                setIsError({Status:false});
                setIsLoading(false);
                if(response.status === 404){
                    throw new Error ("failed to fetch")
                }

            }catch(error){
                console.log(error);
                setIsError({Status:true,msg:error.message});
                setIsLoading(false);

            }

           
    }

    useEffect(()=>{
        UserFetched(URL);
    },[]);

    return[Data,isLoading,isError,]

}
export default FetchedFun