import React ,{useState,useEffect} from "react";


const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
const Pavan=()=>{


    const [drinks,setDrinks] = useState([]);
    const [searchTerm,setSearchTerm] = useState('');
    const [loder,setLoder]=useState(false);
    const [isError , setIsError]= useState({
        status:false,
        msg : ""
    })





      const drinksFetch   = async (apiurl)=>{

        setLoder(true);
        setIsError({status:"false",msg:""})
        try{
            const response = await fetch(apiurl);
            const {drinks} = await response.json();
         
            setDrinks(drinks)
            setLoder(false)
            console.log(drinks)
            setIsError({status:"false",msg:""})
            if (!drinks){
                throw new Error("data not found");
            }

        } catch (error){
            console.log(error.message)
            setLoder(false)
            setIsError({status:"ture",msg: error.message||"something is error"})
        }
    }
      


    useEffect(()=>{
        const MainUrl = `${URL}${searchTerm}`
        drinksFetch(MainUrl);
        console.log(MainUrl)
    },[searchTerm])






    return(
        <div style={{ textAlign:"center"}} >
            
            <h1 style={{color:"blue"}}>Rampa Restuarant</h1>

            
            <div >
                <input  
                type=" text"
                name = "searchBar"
                maxLength={10}
                id = "searchbar"
                value={searchTerm}
                placeholder="enter your order"
                onChange={(e)=> {setSearchTerm(e.target.value)}}
                />
            </div>
            <hr />
            {loder && <h2>Loading.......</h2>}
            {isError?.status && <h2>{isError.msg}</h2>}
           {!loder  && isError?.status  && <div style={{textAlign:"center"}}>
                
                

                <ul>
                    {
                        drinks.map((eachDrink)=>{
                            const {idDrink,strDrink,strDrinkThumb}= eachDrink
                            return <li key={idDrink}>
                                <div>
                                    <img src={strDrinkThumb} alt="img"/>

                                </div>
                                <div>
                                    <h4>{strDrink}</h4>
                                </div>
                            </li>
                        } )
                    }
                </ul>
            </div>}
        </div>
    )
}
export default Pavan