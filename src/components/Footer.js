import React, { useEffect } from 'react'
import "./Footer.css"
import { FiSend } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";
import { AiFillInstagram } from "react-icons/ai";
import video from "../../src/Assets/video.mp4"
import logo from "../../src/Assets/Logo.png"

import Aos from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(() =>{
    Aos.init({duration: 2000})
   }, [])
  
  return (
    <>
      <section className='footer'>
        <div className='videoDiv'>
          <video src={video} loop autoPlay muted type="video/mp4"></video>
        </div>

        <div className='secContent container'>
          <div className='contactDiv flex'>
            <div data-aos="fade-up"
            className='text'>
              <small>KEEP IN TOUCH</small>
              <h5>MARKETBUZZER TELESERVICES</h5>
            </div>

            <div className='inputDiv flex'>
              <input data-aos="fade-up"
              type='text' placeholder='Enter Email Address'/>
              <button data-aos="fade-up" className='btn flex' type='submit'>SEND
              <FiSend  className='icon'/>
              </button>
            </div>
          </div>

          <div className='footerCard flex'>
            <div className='footerIntro flex'>
              <div className='logoDiv'>
                <a href='#' className='logo flex'>
                <img src={logo} className='logo' alt='logo'/>
                </a>
              </div>

              <div data-aos="fade-up"
              className='footerParagraph'>
             MARKETBUZZER TELESERVICES <br/>
             Reg. Office : F-29 LANE-10 NEW DELHI ,EAST DELHI ,DELHI-110092 <br/>
             GSTIN/UIN: 07ABGFM2842K1Z3 <br/>
             Office : E 185 Sector 63 Noida-201301 <br/>
             GSTIN/UIN: 07ABGFM2842K1Z3 <br/>
              </div>

              <div data-aos="fade-up" className='footerSocials'>
              <AiOutlineTwitter className='icon'/>
              <AiFillInstagram  className='icon'/>
              <BsFacebook  className='icon'/>
              </div>
            </div>

            <div className='footerLinks flex'>

              {/* one group */}
              <div c
              data-aos-duration="3000"
              className='linkGroup'>
                <span className='groupTitle'>
                Explore
                </span>

                <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                About
                </li>
                <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Our Services
                </li>
                <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Contact
                </li>
                <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Terms and Conditions
                </li>
                <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Privacy Policy
                </li>
              </div>
              {/* two group */}
              <div data-aos="fade-up"  data-aos-duration="4000"
              className='linkGroup'>
                <span className='groupTitle'>
                Contact
                </span>

                <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                E 185, Sector 63, Noida 201301
                </li>
                <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                support@marketbuzzerteleservices.cpm
                </li>
                <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                +91-9899180393
                </li>

              </div>
              {/* three group */}
              {/* <div data-aos="fade-up" 
               data-aos-duration="5000"
               className='linkGroup'>
                <span className='groupTitle'>
                  LAST MINUTE
                </span>

                <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                London
                </li>
                <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                California
                </li>
                <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Indonesia
                </li>
                <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Europe
                </li>
                <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                India
                </li>
              </div> */}
            </div>

            <div className='footerDiv flex'>
              <small>Design & Developed By MarketBuzzer Teleservices</small>
              <small>Copyright @2008-2024</small>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default Footer;