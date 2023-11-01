import './../stylesheets/loginpage.css'
import { useContext } from 'react';
import { UserContext } from '../context /UserContext';
import { useNavigate } from 'react-router';

export default function LoginPage() {
    const navigate = useNavigate();
    const {credential , setcredential} = useContext(UserContext);

    function inputChange(prop) {
        const name = prop.target.name;
        const newObj = { ...credential, [name]: prop.target.value };
        setcredential(newObj);
    }

    async function register() {
        console.log("hi");
        const {email , username , password} = credential;
        console.log({email , username , password});
        const options = {
            method : "POST",
            body : JSON.stringify({email , username , password}),
            credentials : 'include',
            headers : {'Content-type':'application/json'}
        }
        let response = await fetch('http://localhost:8000/api/register' , options);

        if(response.ok){
            console.log("ok");
            return navigate("/");

        }
        else{
            console.log("error");
        }
        

    }

    function checkSumbit(event){
        event.preventDefault();

        if(!credential.username || !credential.password || !credential.confirmpassword || !credential.email){
            return alert("Please Enter all fields");
        } 

        if(credential.password !== credential.confirmpassword){
            return alert("Passwords are different");
        }

        register();
    }
    
    return (
        <div className="login-page">
            <div className="form-box">
                <p className='form-title'>Register</p>
                <form action="">
                <p className='form-label'>Email address</p>
                    <input
                        type="email"
                        placeholder="Enter Email here"
                        name='email'
                        onChange={inputChange}
                        value={credential.email}>
                    </input>
                    <p className='form-label'>Username</p>
                    <input
                        type="text"
                        placeholder="Enter username here"
                        name='username'
                        onChange={inputChange}
                        value={credential.username}>
                    </input>
                    <p className='form-label'>Password</p>
                    <input
                        type="password"
                        placeholder="Enter Password here"
                        name='password'
                        onChange={inputChange}
                        value={credential.password}>
                    </input>
                    <p className='form-label'>Confirm Password</p>
                    <input
                        type="password"
                        placeholder="Enter Password again here"
                        name='confirmpassword'
                        onChange={inputChange}>

                    </input>
                    <button onClick={checkSumbit}>Sumbit</button>
                </form>
                <p className="not-registered">Are you already registered ? <a href='/login'>Yes</a></p>
            </div>
        </div>
    )
}