import React, { useState } from 'react'
import './Navbar.css'
import { IoCloseCircle } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import logo from "../../src/Assets/Logo.png"

const Navbar = () => {
    const [active, setActive]= useState('navBar')
    //function to toggle navbar
    const showNav = () => {
      setActive('navBar activeNavbar')
    }
    //function to toggle navbar
    const removeNavbar = () => {
      setActive('navBar')
    }
  return (
    <>
      <section className='navBarSection'>
      <header className='header flex'>
        <div className='logoDiv'>
            <a href='#' className='logo flex'>
                <img src={logo} className='logo' alt='logo'/>
            </a>
        </div>

        <div className={active}>
          <ul className='navLists flex'>
            <li className='navItem'>
              <a href='#' className='navLink'>Home</a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>About us</a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>Services</a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>Blogs</a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>FAQ</a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>Testimonial</a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>Contact</a>
            </li>

            <button className="btn">
              <a href='#'>Get Solution</a>
            </button>
          </ul>
          <div onClick={removeNavbar}
          className='closeNavbar'>
          <IoCloseCircle  className='icon'/>
          </div>
        </div>
        <div onClick={showNav}
         className='toggleNavbar'>
        <TbGridDots  className='icon'/>
        </div>
      </header>

      </section>
    </>
  )
};


export default Navbar;