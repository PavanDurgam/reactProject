import { type } from "@testing-library/user-event/dist/type";
import React, {useReducer} from "react";

const REduserHook= ()=>{

    const reducer = (state , action)=>{
        if (action.type === "DELETE_PERSON"){
         const newData = state.data.filter((eachName) =>{
               return eachName.id != action.payload;
            });
            return {
                ...state,
                data:newData,
                length:state.length-1
            }
            
        }
      
        if (action.type === "EDIT_USER"){

           return {
            ...state,
            task : action.payload
            
           }
           


          
        }
        if (action.type === "EDIT_PERSON"){

            const addData = inputValue;

            
            return{
                ...state,
                task:action.payload
            }
           }
            
      
    return state
    }


    const initialState = {
        data:[
            {name:"ram",destigination :"MY GOD",id:"556564"},
            {name:"pavana",destigination :"DEVOT OF RAMAIAH",id:"5565641544"}
        ],
        length:[2],
        task:[],
    }



  const [state,dispatch] = useReducer(reducer,initialState);

 const deleteHandle= (id)=>{
    dispatch({
        type : "DELETE_PERSON",
        payload : id,
    })

 }



 const editHandle= (id)=>{
    dispatch({
        type : "EDIT_PERSON",
        payload : id,
    })

 }

 const handleChange=(event)=>{
    const inputValue = (event.target.value);
    console.log(inputValue)
    dispatch({
        type:"EDIT_USER",
        payload:inputValue,
    })
    
    
 }




   
        return(
            <div>
                <h1> length is :  {state.length}</h1>
                {
                    state.data.map((eachName) =>{
                        const{name, id, destigination ,task}= eachName;
                        return <div key={id}>
                            <h4> my name is {name}</h4>
                            <input type="text" id= "Person"   placeholder="enter your needs" onChange={handleChange}/> <button type = "delete" onClick={()=> editHandle(id)}>add</button> 
                            <p>he is {destigination}</p>
                            <p>my task is {task}</p>
                            
                            <button type = "delete" onClick={()=> deleteHandle(id)}>delete</button>
                               
                             </div>

                    })
                }

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br><br></br><br></br>
                
            </div>
        )
  

}
 export default REduserHook