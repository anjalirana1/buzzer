import React, { useEffect } from 'react'
import "./Home.css"
import lead from "../../Assets/lead.jpg"
import sms from "../../Assets/sms.png"
import affiliate from "../../Assets/affiliate.jpg"
import sms2 from "../../Assets/sms2.jpg"

import Aos from 'aos';
import 'aos/dist/aos.css'

const Home = () => {
    useEffect(() =>{
        Aos.init({duration: 2000})
       }, [])
  return (
    <>
    
      <div id="carouselExampleCaptions" class="carousel slide main">
  <div class="carousel-indicators sectitle">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={lead} class="d-block w-100 home-img" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h2 data-aos="fade-right">LEAD GENERATION </h2>
        <p data-aos="fade-left">SOLUTION FOR YOUR BUSINESSES.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={sms} class="d-block w-100 home-img" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h2 data-aos="fade-up">BULK SMS MARKETING</h2>
        <p>SOLUTION FOR YOUR BUSINESSES.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={affiliate} class="d-block w-100 home-img" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h2 data-aos="fade-left">AFFILIATE MARKETING</h2>
        <p data-aos="fade-left">SOLUTION FOR YOUR BUSINESSES.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden" >Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div className='box'>
  

<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active ">
    <div class="d-block w-100 text-center slider-box-text">
      <h1 class="hi-text">24x7</h1>
      <h5 className='h5-text'>Customer Support System</h5>
      </div>
    </div>
    <div class="carousel-item">
    <div class=" d-block w-100 text-center slider-box-text">
      <h1 class="hi-text">600+</h1>
      <h5 className='h5-text'>Enterprice Client Are Listed</h5>
      </div>
    </div>
    <div class="carousel-item">
    <div class="d-block w-100 text-center slider-box-text">
      <h1 class="hi-text">5 Billion+</h1>
      <h5 className='h5-text'>Voice Calls</h5>
      </div>
      {/* <img src={affiliate} class="d-block w-100" alt="..."/> */}
    </div>
  </div>
</div>


</div>

    </>
  )
};

export default Home;