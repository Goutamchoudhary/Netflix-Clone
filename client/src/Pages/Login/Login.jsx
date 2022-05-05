import { useContext } from 'react';
import { useState } from 'react';
import {login} from "../../authContext/apiCalls";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../authContext/AuthContext';
import './Login.scss';
import FooterCompound from "../../compounds/FooterCompound";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {dispatch} = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <>
        <div className='login'>
            <div className="top">
                <div className="wrapper">
                    <img className='logo' 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" 
                    alt="" 
                    />
                </div>
            </div>
            <div className='container'>
                <form >
                    <h1>Sign In</h1>
                    <input type="email" placeholder='Email or Phone Number' onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                    <button className='loginButton' onClick={(e) => {e.preventDefault(); login({email, password}, dispatch)}}>Sign In</button>
                    <p>Need help?</p>
                    <span>New to Netflix? 
                        <b onClick={()=> navigate('/register')}>Sign up now.</b></span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a
                        bot. <b>Learn more</b>.
                    </small>
                </form>
            </div>
        </div>
        
        <FooterCompound />
        </>

    )
}

export default Login