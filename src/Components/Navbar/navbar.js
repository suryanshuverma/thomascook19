import React from 'react'
import "./navbar.css";
import logo from "../../assets/logo.jpg"
import {GiHamburgerMenu} from "react-icons/gi";
const navbar = () => {
  return (
   <>
   <nav className='main-nav'>
    <div className='logo'>
        <h2>
           <img src={logo}></img>
            
        </h2>
    </div>
    <div className='menu-link'>
        <ul>
            <li>
                <a href='#'>Holidays</a>
            </li>
            <li>
                <a href='#'>Hotels</a>
            </li>
            <li>
                <a href='#'>Flights</a>
            </li>
            <li>
                <a href='#'>Gift Cards</a>
            </li>
            <li>
                <a href='#'>Offers </a>
            </li>
        </ul>
        {/* <div className='hamburger-menu'>
            <a href="#">
                <GiHamburgerMenu/>
            </a>

        </div> */}

    </div>
   </nav>
   {/* <section className='hero-section'>
    <p>Welcome to Thomas Cook</p>
   </section> */}
   </>
  )
}

export default navbar