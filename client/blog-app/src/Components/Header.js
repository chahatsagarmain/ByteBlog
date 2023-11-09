import { Link } from "react-router-dom";
import './../stylesheets/header.css';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context /UserContext";
import { useContext } from "react";
import { useCookies } from "react-cookie";
import ligtlogo from '../resources/icons/brightness.png';
import nightlogo from '../resources/icons/night-mode.png';

export default function Header() {

    const {username , setUsername , isDark , setDark} = useContext(UserContext);
    const navigate = useNavigate();
    const [cookie , setCookie , removeCookie] = useCookies('token');

    
    useEffect(() => {
        const checkCookie = async () => {
            const options = {
                method: "GET",
                credentials: 'include'
            }
            await fetch("http://localhost:8000/api/check", options).then(
                async (response) => {
                    const text = await response.text();
                    if (response.status !== 200) {
                        console.log("reponse not ok");
                        
                    }

                    else {
                        console.log(text);
                        setUsername(text);
                    }

                }
            ).catch(error => {
                console.log(error);
            });
        };

        checkCookie();
    }, [setUsername]);

    function toggleTheme(){
        const header = document.getElementById('header');

        if(isDark === false){
            header.style.color = "#fff";
            header.style.backgroundColor = "#1c2833";
            setDark(true);
        }

        else{
            header.style.backgroundColor = "#fff";
            header.style.color = "black";
            setDark(false);
        }
    }
    function logout() {
        
        removeCookie('token');
        setUsername(null);
        return navigate("/");

    }


    return (
        <div className="header" id = "header">

            <Link to="/" className="title"><p>ByteBlog</p></Link>
            <div className="side-buttons">
                
                {username && <Link to="/createpost" > <button>Post</button></Link>}
                {username && <button onClick={logout}>Logout</button>}
                {!username && <Link to={"login"}> <button>Login</button></Link>}
                {!username && <Link to={"register"}><button>Register</button></Link>}
                <button onClick={toggleTheme} id="mode-button"><img 
                            src={isDark ? nightlogo : ligtlogo}
                            alt="Dark Mode logo"
                            id="mode-logo">
                </img></button>
            </div>
        </div>
    )
}

