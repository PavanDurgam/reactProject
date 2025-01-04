import { Component } from "react";
import "./search.css"


class Withdraw extends Component{
    state = {
         amount:50000,
         name:"Pavan"
    }
    addMoney = ( )=>{
       const updateamount = this.setState((prevState)=> {

         
        return {amount:prevState.amount-2000}
       
       
       })
       

    }

  
    addMoneyOne = ( )=>{
        const updateamount = this.setState((prevState)=> {
 
          
         return {amount:prevState.amount-100}
        
        
        })
        
 
     }



     addMoneyFive = ( )=>{
        const updateamount = this.setState((prevState)=> {
 
          
         return {amount:prevState.amount-5000}
        
        
        })
        
 
     }



     addMoneyThousand = ( )=>{
        const updateamount = this.setState((prevState)=> {
 
          
         return {amount:prevState.amount-1000}
        
        
        })
        
 
     }

 Message(){
    const {amount} = this.state
    if (amount===0){
        return <div>your a/c balance is Zero</div>
    }
}


     
    render()
    {
        
       

        return(
           
            <div>
                <p>{this.state.name} your avalibale balance is {this.state.amount}</p>

                <p>Withdraw Money</p>
                <div>
                    {this.Message()}
                </div>
                

              <button className="button" onClick={this.addMoney}>2000</button>

              <button className="button" onClick={this.addMoneyThousand}>1000</button>

              <button className="button" onClick={this.addMoneyFive}>500</button>

              <button className="button" onClick={this.addMoneyOne}>100</button>
                

            </div>
        )
    }
}
export default Withdraw
