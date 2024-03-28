import React from 'react'
import './Blog.css'
import work from "../../Assets/work.jpg"
import sms from "../../Assets/sms.png"
import ivr from "../../Assets/ivr.jpg"
import whatsapp from "../../Assets/whatsapp.jpg"
import digital from "../../Assets/digital.jpg"
import { AiOutlineArrowRight } from "react-icons/ai";
import jio from "../../Assets/jio.png"
import amwa from "../../Assets/amwa.jpg"
import bharti from "../../Assets/bharti.png"
import kaza from "../../Assets/kaza.jpg"
import oppo from "../../Assets/oppo.png"
import policy from "../../Assets/policy.png"
import realme from "../../Assets/realme.png"
import airtel from "../../Assets/airtel.png"
import spencer from "../../Assets/spencer.png"

const Blog = () => {
  return (
    <>
      <div class="card-main mb-3">
  <div class="row g-0 card-box">
    <div class="col-md-8">
      <div class="card-body">
        <p className='history-text'>HISTORY</p>
        <h5 class="card-title card-text1">ABOUT OUR COMPANY</h5>
        <p class="card-text card-p">In the last 6 years, we have provided services <br/>
        to more than 800 clientsin various vertical industry categories. <br/>
         MARKETBUZZER TELESERVICES is a capable partner
          for enterprises  <br/>and businesses seeking online marketing services.</p>
        <p class="card-text"><p class="text-body-secondary card-p">6+ Years of Experience</p></p>
      </div>
    </div>
    <div class="col-md-4">
      <img src={work} class="img-fluid rounded-start img-blur" alt="..."/>
    </div>
    <a href="#" class="btn btn-primary button" type='button'>READ MORE
     <AiOutlineArrowRight className='icon'/></a> 
  </div>
</div>

<div className='cardscroll-box'>
  <div className='cardscroll-box2'>

 <div className='cardscroll-card'>
  <img src={sms} className='card-img' alt=''/>

  <div className='cardscroll-body'>
    <h1 className='cardscroll-title'>BULK SMS</h1>
    {/* <p className='cardscroll-sub'>MarketBuzzer TeleServices is one of the leading and reliable Bulk sms service provider in Noida.</p> */}
    <p className='cardscroll-info'>
    MarketBuzzer TeleServices has been now adopted by different types of Industrial, Educational
    , Real estate, Health, IT, Financial and different type of service sectors to promote their 
    business and moreover spreading the necessary information via Bulk SMS to their clients or to
     the general public.
    </p>
    <button className='cardscroll-btn btn'>Read More</button>
  </div>
 </div>


 <div className='cardscroll-card'>
  <img src={whatsapp} className='card-img' alt=''/>

  <div className='cardscroll-body'>
    <h1 className='cardscroll-title'>WhatsApp Marketing</h1>
    {/* <p className='cardscroll-sub'>MarketBuzzer TeleServices is one of the leading and reliable Bulk sms service provider in Noida.</p> */}
    <p className='cardscroll-info'>
    Reaching out to your target audience quicker than ever is now possible. Thanks to WhatsApp 
    Broadcast List feature. Broadcast Lists are saved lists of message recipients that marketers
     can repeatedly send broadcast messages to, without having to select them each time.

    </p>
    <button className='cardscroll-btn btn'>Read More</button>
  </div>
 </div>


 <div className='cardscroll-card'>
  <img src={digital} className='card-img' alt=''/>
  <div className='cardscroll-body'>
    <h1 className='cardscroll-title'>Digital Marketing</h1>
    {/* <p className='cardscroll-sub'>MarketBuzzer TeleServices is one of the leading and reliable Bulk sms service provider in Noida.</p> */}
    <p className='cardscroll-info'>
    Digital Marketing includes various exercises for the web separated from advertising and every 
    single action should be executed with center around the end clients to guarantee a good outcome.
    
    </p>
    <button className='cardscroll-btn btn'>Read More</button>
  </div>
 </div>


 <div className='cardscroll-card'>
  <img src={ivr} className='card-img' alt=''/>

  <div className='cardscroll-body'>
    <h1 className='cardscroll-title'>IVR Services</h1>
    {/* <p className='cardscroll-sub'>MarketBuzzer TeleServices is one of the leading and reliable Bulk sms service provider in Noida.</p> */}
    <p className='cardscroll-info'>
    Reaching out to your target audience quicker than ever is now possible. Thanks to WhatsApp
     Broadcast List feature. Broadcast Lists are saved lists of message recipients that marketers
      can repeatedly send broadcast messages to, without having to select them each time.

    </p>
    <button className='cardscroll-btn btn'>Read More</button>
  </div>
 </div>
  </div>
</div>

<div className='slider-body'>
<p className='clients-text'>OUR CLIENTS</p>
        <h5 class="card-title card-text2">PLEASURE TO WORK WITH US</h5>
<div className='slider'>
<div className='slider-track'>
    
    <div className='slider-div'>
      <img src={jio} className='slider-img' alt='jio'></img>
    </div>
    <div className='slider-div'>
      <img src={airtel} className='slider-img' alt='airtel'></img>
    </div>
    <div className='slider-div'>
      <img src={amwa} className='slider-img' alt='amwa'></img>
    </div>
    <div className='slider-div'>
      <img src={spencer} className='slider-img' alt='spencer'></img>
    </div>
    <div className='slider-div'>
      <img src={kaza} className='slider-img' alt='kaza'></img>
    </div>
    <div className='slider-div'>
      <img src={oppo} className='slider-img' alt='oppo'></img>
    </div>
    <div className='slider-div'>
      <img src={realme} className='slider-img' alt='realme'></img>
    </div>
    <div className='slider-div'>
      <img src={bharti} className='slider-img' alt='bharti'></img>
    </div>
    <div className='slider-div'>
      <img src={policy} className='slider-img' alt='policy'></img>
    </div>


    {/* double */}

    <div className='slider-div'>
      <img src={jio} className='slider-img' alt='jio'></img>
    </div>
    <div className='slider-div'>
      <img src={airtel} className='slider-img' alt='airtel'></img>
    </div>
    <div className='slider-div'>
      <img src={amwa} className='slider-img' alt='amwa'></img>
    </div>
    <div className='slider-div'>
      <img src={spencer} className='slider-img' alt='spencer'></img>
    </div>
    <div className='slider-div'>
      <img src={kaza} className='slider-img' alt='kaza'></img>
    </div>
    <div className='slider-div'>
      <img src={oppo} className='slider-img' alt='oppo'></img>
    </div>
    <div className='slider-div'>
      <img src={realme} className='slider-img' alt='realme'></img>
    </div>
    <div className='slider-div'>
      <img src={bharti} className='slider-img' alt='bharti'></img>
    </div>
    <div className='slider-div'>
      <img src={policy} className='slider-img' alt='policy'></img>
    </div>

</div>
</div>
</div>
    </>
  )
};

export default Blog;