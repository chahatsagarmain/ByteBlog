import { Link } from "react-router-dom";
import './../stylesheets/header.css';
import { useState , useEffect } from "react";



export default function Header() {

    
    return (
        <div className="header">
            
            <Link to="/" className = "title"><p>ByteBlog</p></Link>
            <div className = "side-buttons">
                <Link to={"login"}>
                    <button>Login</button>
                </Link>
                <Link to={"register"}>
                    <button>Register</button>
                </Link>
            </div>
        </div>
    )
}

