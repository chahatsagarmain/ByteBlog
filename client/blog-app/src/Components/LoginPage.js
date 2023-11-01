import './../stylesheets/loginpage.css';
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

    async function login(event) {

        try {
            event.preventDefault();
            console.log(credential);
            const options = {
                method: 'POST',
                body: JSON.stringify(credential),
                headers: { 'Content-type': 'application/json' },
                credentials: 'include'
            }

            let response = await fetch('http://localhost:8000/api/login', options);

            if (response.ok) {
                console.log("ok");
                return navigate("/");
            }
            else {
                alert("Wrong credentials");
            }
        }
        catch (error) {
            console.log(error);
        }

    }

    function checkSumbit() {

        if (!credential.email || !credential.password) {
            return alert("Please Enter all fields");
        }

        return login();
    
    }

    return (
        <div className="login-page">
            <div className="form-box">
                <p className='form-title'>Login</p>
                <form action="" onSubmit={login}>
                    <p className='form-label'>Email address</p>
                    <input type="email" placeholder="Enter Email here" name='email' onChange={inputChange} value={credential.email}></input>
                    <p className='form-label'>Password</p>
                    <input type="password" placeholder="Enter Password here" name='password' onChange={inputChange} value={credential.password}></input>
                    <button onClick={checkSumbit}>Sumbit</button>
                </form>
                <p className="not-registered">Are you not registered ? <a href='/register'>Yes</a></p>
            </div>
        </div>
    )
}