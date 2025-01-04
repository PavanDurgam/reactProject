import React from "react";
import { NavLink, Outlet } from "react-router-dom";
function FuterProject (){
    return(
        <div>
            <nav >
                <ul>
                <NavLink to="/">Home  </NavLink>
                <NavLink to="/Product">Products  </NavLink>
                <NavLink to="/ProductsDetails">ProductsDetails </NavLink>
                <NavLink to="/cart">cart </NavLink>
                </ul>
                
            </nav>
            <Outlet/>
            
        </div>
    )
}
export default FuterProject