import "./search.css"


const DeleteFun = props =>{
    const {History,DeleteItem } = props
    const{search,time,uniqueNo}= History

   const  Remove = ()=>{
     DeleteItem(uniqueNo)
     console.log("trigged")
    }


    return(
        <div className="Serachitem">
            <h1 className="name">your {search} at {time}</h1>
            <div>
                <button onClick={Remove}> dlt</button>
            </div>
        </div>
    )
}





export default DeleteFun