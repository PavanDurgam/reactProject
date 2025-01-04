import React,{useState,useEffect, createContext} from "react";

export const UserDataContext  = React.createContext();

export const UserContextProvider = ({children})=>{
    const [user,setUser] = useState(null);
 
    return <UserContextProvider value = {"hello ram  ........"}>{children}</UserContextProvider>
} 
