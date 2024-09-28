import { SyntheticEvent, useState } from "react";
import "./Register.css";
import authService from "../../../Services/AuthService";
import { appConfig } from "../../../Utils/AppConfig";
import Home from "../../HomeArea/Home/Home";
import LoginForm from "../LoginForm/LoginForm";

function Register(): JSX.Element {
    const [user , setUser] = useState({
        username: '', 
        password: ''
    });
    const [error, setError] = useState(''); 

    const [login, setLogin] = useState(false); 
    const [isReg, setReg] = useState(false); 

    if(login) return <LoginForm/> 
    if(isReg) return <Home />

    const handelSubmit = async(e:SyntheticEvent) => {
        e.preventDefault(); 
        const authObject = {
            'Public-Key':appConfig.projectId, 
            'User-Name': user.username,
            'User-Secret': user.password
        }
        console.log(authObject);
        
        const userObject = {
            username: user.username,
            secret: user.password
        }
        try {
            await authService.createUser(userObject)
            await authService.createChat(authObject)
            
 
            localStorage.setItem('username', user.username)
            localStorage.setItem('password', user.password)

            setReg(true)
            setError('');
        } catch (error:any) {
            setError(error.message)
        }
        
    }

    return (
        <div className="Register"> 
			<div className="container">
                <h1 className="title">Chat Application</h1>
                <div className="heading">Register</div>
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
                            Create
                        </button>
                    </div>
                    <div className="register">
                        <span onClick={() => setLogin(true)}>Already have an account?</span>
                    </div>
                </form>
                <h2>{error}</h2>
                
            </div>
        </div>
    );
}

export default Register;
