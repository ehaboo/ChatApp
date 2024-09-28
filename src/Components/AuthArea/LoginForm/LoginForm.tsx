import "./LoginForm.css";
import {SyntheticEvent, useState} from "react";
import { appConfig } from "../../../Utils/AppConfig";
import authService from "../../../Services/AuthService";
import Register from "../Register/Register";


function LoginForm(): JSX.Element {
    const [user , setUser] = useState({
        username: localStorage.getItem("username") || "", 
        password: localStorage.getItem("password") || ''
    });
    const [error, setError] = useState(''); 

    const [register, setRegister] = useState(false); 

    if(register) return <Register/> 

    const handelSubmit = async(e:SyntheticEvent) => {
        e.preventDefault(); 
        const authObject = {
            'Public-Key':appConfig.projectId, 
            'User-Name': user.username,
            'User-Secret': user.password
        }
        try {
            authService.getUser(authObject);
                
            localStorage.setItem('username', user.username)
            localStorage.setItem('password', user.password)
            window.location.reload(); 
            setError('');
        } catch (error:any) {
            console.log(error);
            
            setError(error.message);
        }
    }
    return (
        <div className="LoginForm">
			<div className="container">
                <h1 className="title">Chat Application</h1>
                <div className="heading">Sign In</div>
                <form className="form" onSubmit={handelSubmit}>
                <input 
                    className="inputLogin"  
                    type="text" 
                    value={user.username} 
                    onChange={ (e) => setUser({...user, username:e.target.value})} 
                    placeholder="Username"
                    required
                    />
                    <input 
                    className="inputLogin"  
                    type="password" 
                    value={user.password} 
                    onChange={ (e) => setUser({...user, password:e.target.value})} 
                    placeholder="Password"
                    required
                    />
                    <div style={{alignItems: 'center'}}>
                        <button className="login-button">
                            Start Chatting
                        </button>
                    </div>
                    <div className="register">
                        <span onClick={() => setRegister(true)}>Create New Account?</span>
                    </div>
                </form>
                <h2>{error}</h2>
                
            </div>
        </div>
    );
}

export default LoginForm;
