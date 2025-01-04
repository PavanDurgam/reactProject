 import React,{Children, useContext} from "react";
 export const contextUser = React.createContext();
  const UserProvider = ({Children})=>{
    return(
     <contextUser.Provider>{Children}</contextUser.Provider>
   )
    
  }
  export default UserProvider
