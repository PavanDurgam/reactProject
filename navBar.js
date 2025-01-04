import React from "react";
import {NavLink} from "react-router-dom"
import './abot.css'

const NavBar = ()=>{
    const LinkStyle=({isActive})=>{
        
        return{
            textDecoration :isActive?"none":"underline",
            color:isActive?'blue':'red',
            fontWeight:isActive?"bold":"normal"
        }

    }
    return(
    <div className="NavBar">
        <nav>
        <NavLink to="/" style={LinkStyle}>Home</NavLink>
        <NavLink to="/about" style={LinkStyle}>About</NavLink>
        <NavLink to="/contact" style={LinkStyle}>Contact</NavLink>
        <NavLink to="/Project" style={LinkStyle}>Projects</NavLink>
        <NavLink to="/users"style={LinkStyle}>Users </NavLink>
        </nav>
        
    </div>
    )
}
export default NavBar