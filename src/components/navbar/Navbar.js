import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import Login from "../../Login";
import MenuBtn from "./Menu-btn";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }

    return (
        <>
        <nav ref={navRef}>
            <img src="onair-logo.png" />
            <div className="search">
                <input id="submit" type="submit" value="" />
                <input id="search-input" type="search" placeholder="Search"/>
            </div>
            <div>
                <a href="#">Movies</a>
                <a href="#">Channels</a>
                <a href="#">Series</a>
                <a href="#">Music</a>
                <a href="#">Games</a>
            </div>
            <Login />
            <button className="nav-btn nav-close-btn" onClick={showNavbar}> 
                <FaTimes arg={showNavbar}/>
            </button>
        </nav>
        <MenuBtn />
        </>
    );
}

export default Navbar;