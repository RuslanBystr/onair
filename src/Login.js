import {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import './css/main.css';



function Login() {
    const logRef = useRef();

    const showLoginForm = () => {
        logRef.current.classList.toggle('responsive_log');
    }
    return (
    <>
    <nav ref={logRef}>
        <img src="onair-logo.png"/>
        <div className="login-form">
            <input type='email' />
            <input type='password' />
            <input type='submit' />
            <a href="#">Forgot password?</a>

        </div>
        <button className="nav-btn nav-close-btn" onClick={showLoginForm}> 
                <FaTimes />
        </button>
    </nav>
    <button className="nav-btn" onClick={showLoginForm}> 
        <FaBars />
    </button>
    </>
    )
 }


export default Login;