import React, { useContext } from "react";
import UserContext from "./LoginUserContex";

const LoginData = () => {
    const { userDetails } = useContext(UserContext); // Access the correct property
    console.log(userDetails); // Logs user details set in Register_form
    return (
        <div>
            <h1>Welcome</h1>
            <p>{userDetails?.Name}</p>
            <p>{userDetails?.mail}</p>
        </div>
    );
};

export default LoginData;
