import axios from 'axios';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.scss';
import JumboCompound from "../../compounds/JumboCompound";
import Seperator from "../../Components/Seperator/Seperator";
import AccordionCompound from "../../compounds/AccordionCompound";
import FooterCompound from '../../compounds/FooterCompound';

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const emailRef = useRef();

    const handleStart = ()=> {
        setEmail(emailRef.current.value);
    }
    const handleFinish = async(e)=> {
        e.preventDefault();
        //console.log("In the Register Page");
        //console.log(`${email} and ${username}`);    
        
        try{
            await axios.post(`/auth/register`, {username, email, password});
            navigate(`/login`);
        }catch(err){
            console.log(err);
        }
    }

    return (
        <>
        <div className='register'>
            <div className="top">
                <div className="wrapper">
                    <img className='logo' 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" 
                    alt="" 
                    />
                    <button className="loginButton" onClick={()=> navigate('/login')}>Sign In</button>
                </div>
            </div>
            <div className='container'>
                <h1>Unlimited Movies, TV Shows, and more.</h1>
                <h2>Watch Anywhere. Cancel Anytime</h2>
                <p>
                    Ready to Watch? Enter your Email to create or restart your membership
                </p>
                {!email ? (
                    <div className="input">
                        <input type="email" placeholder='Email Address' ref={emailRef} />
                        <button className="registerButton" onClick={handleStart}>Get Started</button>
                    </div>
                ) : (
                    <form className="input">
                        <input type="username" placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
                        <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                        <button className="registerButton" onClick={handleFinish}>Register</button>
                    </form>
                )}
                
            </div>
        </div>
        
        <Seperator />
        <JumboCompound />
        <AccordionCompound />
        <Seperator />
        <FooterCompound />

        </>
    )
}

export default Register