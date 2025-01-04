import { type } from "@testing-library/user-event/dist/type";
import { isEditable } from "@testing-library/user-event/dist/utils";
import React,{useReducer,useEffect,useState} from "react";



const initialState = {
    UserData :[],
    addedUser:{id:"",name:"",email:""},
    isLoading:{status:false},
    isError:{status:false,msg:""},
    isEditedData:{status:false,name:"",email:"",id:""}
    

}

const ReducerPratice = ()=>{

   


    const reducer = (state,action)=>{
        switch (action.type){
            case "NEW_DATA" :
                return{...state,UserData:action.payload};
            case "LOADING":
                return {
                   ...state,
                   isLoading:action.payload
                };
                case "ERROR_FOUND":
                    return {
                       ...state,
                       isError:action.payload
                    };
                
                
                case "DELETE_USER":
                    const newUser = state.UserData.filter(eachUser=>
                        eachUser.id !== action.payload
                        )
                return {
                   ...state,
                   UserData:newUser
                };
                case "EDIT_CLICKED":
                    return {
                       ...state,
                       isEditedData:action.payload
                    };

                case "INPUT_NAME":
                    return {
                           ...state,
                           isEditedData:{...state.isEditedData,name:action.payload}
                    };
                case "INPUT_EMAIL":
                        return {
                               ...state,
                               isEditedData:{...state.isEditedData,email:action.payload}
                        };
                case "UPDATE_USER":
                    const EditedData = state.UserData.map((eachUser)=>{
                        if (eachUser.id === action.payload.id){
                            return {
                                id:action.payload.id,
                                name:action.payload.name,
                                email:action.payload.email
                            }
                        }else{
                            return eachUser
                            
                        }
                    })
                    return  {
                        ...state,
                        UserData : EditedData,
                        
                    }
                case "NEW_USER_NAME":
                    return{...state,addedUser:{...state.addedUser,name:action.payload}}

                case "NEW_USER_EMAIL":
                        return{...state,addedUser:{...state.addedUser,email:action.payload}};
                case "ADD_NEW_USER_DATA":
                    return{...state , 
                        UserData:[...state.UserData,{id:action.payload.id,name: action.payload.name, email: action.payload.email}],
                    addedUser:{id:"",name:"",email:""}
                };
                
               
        }
       

    }

    const [state,dispatch] = useReducer(reducer,initialState)

    const UserFecthData = async (URL)=>{

        try{
            dispatch({type:"ERROR_FOUND",payload:{status:false,msg:""}})
            dispatch({type:"LOADING",payload:{status:true},})
            const Response = await fetch(URL);
            const data = await Response.json();
            console.log(Response);

            dispatch({type:"NEW_DATA",payload:data,})

        
            dispatch({type:"LOADING",payload:{status:false},})

            if (Response.status === 404){
                throw new Error("Data not found")
            }

        }catch(error){
            console.log(error.message)

            dispatch({type:"ERROR_FOUND",payload:{status:true,msg:error.message||"somethig went wrong"}})

            dispatch({type:"LOADING",payload:{status:false},})

        }

        

    }


    useEffect(()=>{
        UserFecthData( "https://jsonplaceholder.typicode.com/users");
    },[]);


    const HandleDelete=(id)=>{
        dispatch({type:"DELETE_USER",payload:id})

    }

    const HandleUpdate=(id,name,email)=>{
        console.log(id);console.log(name);console.log(email);

        dispatch({type:"UPDATE_USER",payload:{id,name,email}});
        dispatch({type:"EDIT_CLICKED",payload:{status:false,name:"",email:"",id:""}})

    }

    const HandleNewUser=(name,email)=>{
        const id = Date.now().toString();
        console.log(id)
        dispatch({type:"ADD_NEW_USER_DATA",payload:{name,email,id}})

    }


    const HandleEdit=(id,name,email)=>{
        dispatch({type:"EDIT_CLICKED",payload:{status:true,name:name,email:email,id:id}})
        

    }
 

    if (state.isLoading?.status === true){
        return <div>
            <h2>loading......</h2>
        </div>
    }

    if (state.isError?.status === true){
        return <div>
            <h2>{state.isError?.msg}</h2>
        </div>
    }

    return(
        <div style={{textAlign:"center",color:"blue"}}>
           
           {
            state.isEditedData.status && 
            <div>
                
                <div>
                <input type="text" name="user_name" id="user_name" value={state.isEditedData?.name} onChange={(e)=>{dispatch({type:"INPUT_NAME",payload:e.target.value})}} required   / >  
                <input type="email" name="user_email" id="user_email"    value={state.isEditedData?.email}    onChange={(e) => dispatch({ type: "INPUT_EMAIL", payload: e.target.value })}  required  / >
                <button onClick={()=>HandleUpdate(state.isEditedData.id,state.isEditedData.name,state.isEditedData.email)}>updateUserData</button>
            </div>
            </div>
           }

           <div>
                <input type="text" name="new_user_name" id="new_user_name" value={state.addedUser.name}  onChange={(e)=>{dispatch({type:"NEW_USER_NAME",payload:e.target.value})}}    / >
                <input type="email" name="new_user_email" id="new_user_email"  value={state.addedUser.email} onChange={(e)=>{dispatch({type:"NEW_USER_EMAIL",payload:e.target.value})}}    / >  
               
                <button onClick={()=>HandleNewUser(state.addedUser.name,state.addedUser.email)}>addUserData</button>
            </div>
            
            
            <h1 style={{color:"red"}}> ram new user data</h1>
            {
                state.UserData.map((eachUser) =>{
                    const {id ,name,email} = eachUser;
                    return<div id={id}>
                        <h3>{name}</h3>
                        <h4>{email}</h4>
                        <button onClick={()=>HandleEdit(id,name,email)}>edit</button> <button onClick={()=>HandleDelete(id)}>Delete</button>
                    </div>
                })
            }
        </div>
    )
}
export default ReducerPratice