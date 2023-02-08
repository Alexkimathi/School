
import image from '../img/Logo.jpg'
import "./Navbar.css";
import {FaBars, FaTimes} from "react-icons/fa";
import { useRef, useState } from 'react';

function Navbar() {
    const [showLinks, setShowLinks] = useState(false)
 
  return (
    <>
    <nav>
        <a href='/'>
        <img src={image} alt="food-1" className="header__logo" />
        </a>
        <div className='navbar' id={showLinks ? "Hidden" : ""}>
            <li><a href='/' className='active'>Home</a></li>
            <li><a href='/'>About-us</a></li>
            <li><a href='/'>Courses</a></li>
            <li><a href='/'>Downloads</a></li>
            <li><a href='/'>Contacts</a></li>
        </div>

        <button className="nav-btn">
            <FaBars />

        </button>

      
    </nav>
    </>
  )
}

export default Navbar