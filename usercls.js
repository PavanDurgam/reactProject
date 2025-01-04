
 



import {Component} from 'react'
import SearchBar from './component/classcomponent/search'

import './App.css'

const DestinitionList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Kedharanath',
    
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'kashi',
   
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'varanasi',
    
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'badrinath',
    
  }
]

class App extends Component {
  state= {
    searchInput : "",
    DestinitionList : DestinitionList

  }
  inputTrigred =(event) => {
    const {searchInput}= this.state
    this.setState({
      searchInput:event.target.value
   
    })
    
  }
  onDelete = (uniqueNo) =>{
    console.log(uniqueNo)
    const{DestinitionList}=this.state
    const filteredData = DestinitionList.filter(
      eachUser=>eachUser.uniqueNo !== uniqueNo,
    )
    this.setState({
      DestinitionList:filteredData
    })
  
  }


  render(){
    const {searchInput}= this.state
    console.log(searchInput)
    const SearcResult = DestinitionList.filter((eachUser=>eachUser.name.includes(searchInput)))
    return(
      <div>
        <h1>DestinitionList Search</h1>
        <input type='search' onChange={this.inputTrigred}/>
        <ul>
          
          {SearcResult.map(eachUser =>(
            <SearchBar
            DestinitionList = {eachUser}
            key ={eachUser.uniqueNo}
            onDelete = {this.onDelete}
            />
          ))}
         
        </ul>
      </div>
    )
  }
  }


export default App











