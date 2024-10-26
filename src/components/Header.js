import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



const Header =()=>{
    console.log("header is rendered")
    const [btnNameReact, setbtnNameReact]= useState("Login")

    const onlineStatus= useOnlineStatus();


    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"   
                    src={LOGO_URL}
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        onlineStatus: {onlineStatus ?"✅":"🔴"  }
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                        </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        btnNameReact==="Login" ? setbtnNameReact("Logout"): setbtnNameReact("Login")  ;
                    }} 
                    >{btnNameReact}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;