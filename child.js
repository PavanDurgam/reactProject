import { type } from "@testing-library/user-event/dist/type";
import { isEditable } from "@testing-library/user-event/dist/utils";
import React ,{useReducer,useEffect,useState} from "react";
const initialState ={
    userData:[],
    isError :{Status:false,msg:""},
    isLoading:false,
    isEdited:[{Status:false},{id:""},{name:""},{phone:""}],
    

}

const ChildClass = ()=>{
    const reducer = (state,action)=>{

        if (action.type === "UPDATE_DATA"){
            return{
                ...state,
                userData:action.payload,
            }
        }
        if (action.type === "LOADING" ){
            return{
                ...state,
                isLoading:action.payload,
            }
        }
        if (action.type === "ERROR"){
            return{
                ...state,
                isError:action.payload,
            }
        }

        if (action.type === "DELETE_USER"){
            const newUser = state.userData.filter((eachUser)=>
                eachUser.id !== action.payload
            )
            return{
                ...state,
                userData : newUser

            }
        }
        if(action.type === "EDITEDCLICKED"){
            return{
                ...state,
                isEdited:action.payload,
            }
        }
        if(action.type === "UPDATE_USER"){
            const updatedUSer = state.userData.map((eachUser)=>{
                if (eachUser.id === action.payload.id){
                    return{
                        id:action.payload.id,
                        name:action.payload.title,
                        phone:action.payload.email,

                    }

                }else{
                    return eachUser
    
                }
            })
            return{
                ...state,
                userData:updatedUSer,
            }
            
        }
        if (action.type === "INPUTNAME"){
            return{
                ...state,
                isEdited:{
                    ...state.isEdited.id,

                    name:action.payload
                }
             
            }
        }
        if (action.type === "INPUTPHONE"){
            console.log(action.payload)
            return{
                ...state,
                isEdited:[
                    ...state.isEdited,

                    addphone = action.payload
                ]
                
             
            }
        }
        

        return state;

    };


    const UserFecthData = async(url)=>{
        dispatch({type:"ERROR",payload:{Status:false,msg:""}});
        dispatch({type:"LOADING",payload:true});

        try{
            const response= await fetch(url);
       const data = await response.json(); 
       dispatch({
        type:"UPDATE_DATA",
        payload:data,
       })

       dispatch({type:"ERROR",payload:{Status:false,msg:""}});
       dispatch({type:"LOADING",payload:false});


       if (response.status===404)
        throw new Error("data not found");



        } catch(error)
        {
         console.log(error.message)
            dispatch({
                type:"ERROR",
                payload:{Status:true,msg:error.message||"somethimg went worng  ......." }


            })
            dispatch({type:"LOADING",payload:false});
            

        }

       
      

    }


    useEffect(()=>{
      UserFecthData("https://jsonplaceholder.typicode.com/users")
    },[])

    const [state,dispatch] = useReducer(reducer,initialState);



    const handeleDelelte = (id)=>{
        dispatch({type:"DELETE_USER",payload:id,})
    }



    const  upadateData=(id,title,email)=>{
        dispatch({type:"UPDATE_USER",payload:{id,title,email}});
        dispatch({type:"EDITEDCLICKED",payload:{Status:false,id:"",name:"",phone:""}})

    }



 const addDataButton=()=>{
    
    



 }
 const handleInput=(e)=>{
    const InputData = e.target.value;
    dispatch({type:"INPUTNAME",payload:{name:InputData}})
    
    


 }



 const handlephone=(e)=>{
    const inputPhone = e.target.value;
    dispatch({type:"INPUTPHONE",payload:{}})
    
    
 }
 

 





    if (state.isLoading ){
        return(
            <div><h3>loading.......</h3></div>
        )
    }
    if (state.isError?.Status){
        return <div>
            <p>{state.isError?.msg}</p>
        </div>
    }
     


        return(
            <div style={{backgroundColor:"blueviolet"}}>
                
                <h2>user Information </h2>


                <input type="text " name ="addname" id="addname"  value ={InputData} onChange={handleInput}  style={{color:"blue "}}/>  <input type="number " name ="addphone" id="add phone "   onChange={handlephone}   style={{color:"blue "}}/> <button onClick={addDataButton()}>add</button>


                { state.isEdited?.Status && < ReducerForm   id={state.isEdited.id} 
                comeingEmail={state.isEdited.phone} comeingtitle={state.isEdited.name} 
                upadateData={upadateData}
                />}

                <br/>
                {
                    state.userData.map((eachUser)=>{
                        const {id ,name,phone}= eachUser;
                        return  <div key={id} style={{textAlign:"center"}}>
                            <h4>{name}</h4>
                            <p>{phone}</p>
                            <button onClick={()=>{dispatch({type:"EDITEDCLICKED",payload:{Status:true,id:id,name:name,phone:phone}})}}>edit</button> <button onClick={()=>{handeleDelelte(id)}} >delete</button>
                             </div>
                        
                        
                    })
                }
            </div>
        )
  

};

const ReducerForm = ( {id,comeingtitle,comeingEmail, upadateData}) => {

    const[title, setTitle] = useState(comeingtitle ||"");
    const[email, setEmail] = useState(comeingEmail||"");


    return (
        <>
            <form onSubmit={(e)=>{e.preventDefault()}}>
                <input type="text "  id="title"  name="title"  value={title} onChange={(e) =>setTitle(e.target.value)}/ >
                <input type="text "  id="email"  name="phone"  value={email}  onChange={(e) =>setEmail(e.target.value)} / >
                <button onClick={()=>upadateData(id,title,email)}>update Data</button>
            </form>
        </>
    )
};



 export default ChildClass