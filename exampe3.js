import { useState } from "react";


const Example =()=>{
    const [tododata ,settododata]=useState({});

    const [todolist,settodolist]= useState([]);

 const [editTodo,setEditTodo]=useState({
    id:"",
    isEditing:false,
 })


    const addItem=(e)=>{
        if (tododata.item===""){
            return alert("enter any task")
    
        }
       e.preventDefault();
       let   newtodo ={
        item:tododata.item,
        id:new Date().getTime().toString(),
        
        
       }
       
       
       settodolist([...todolist,newtodo]);
        settododata({item:""})
       
            
    }

    const handlechanges = (e)=>{
        settododata({...tododata,        
        item : e.target.value,
    }
 )
        console.log(tododata);

    }


    const handleDel=(id)=>{
        let modifiedData = todolist.filter((eachitem)=>{
            return eachitem.id !== id;}
        )
        settodolist(modifiedData);
        

    }


    const edittext=(id)=>{
    console.log(id);
    setEditTodo({
    ...editTodo,
    isEditing:true,
    id:id,

})
const editedData = todolist.find((eachItem)=>eachItem.id===id)
console.log(editedData)
settododata({
    item:editedData.item,
    id:editedData.id,
})

 }    

let completeEdit=(e)=>{
   e.preventDefault();
    const updatedTodo = todolist.map((eachItem)=>{
        if (eachItem.id === editTodo.id){
            return {
                item:tododata.item,
                id:editTodo.id,
            }

            
        }
        else{return eachItem}    
    })
    settodolist(updatedTodo);
    settododata({
        item:"",
        id:"",
    })
    setEditTodo({
        ...editTodo,
        isEditing:false,
    })

    }
   
    

    



    return (
        <div>
            
            <input
             type ="text"
             name = "todoitem"
             id = "todo item"
             value = {tododata.item}
             placeholder="enter your  name"
             onChange={handlechanges}

            />
            {
                editTodo.isEditing ? <button type="submit" onClick={completeEdit}>edit</button>:<button type="submit" onClick={addItem}>add</button>
            }

           
           <hr/>

           <div>
            <ul>
                {todolist.length===0 && <h5>no records are avable</h5>}
                {
                    todolist.map((eachitem)=>{
                        const {id,item}=eachitem;
                        return<li key={id}>
                               <button onClick={()=>edittext(id)}>edit</button>
                                <span>{item}</span>
                                <button onClick={()=>handleDel(id)}>delete</button>
                                
                                </li>
                        

                    })
                }
            </ul>

           </div>


        </div>
    )
}
export default Example