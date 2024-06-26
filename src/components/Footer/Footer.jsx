import React,{useEffect} from 'react'

import './Footer.scss'

import Aos from 'aos';
import 'aos/dist/aos.css'

//import icons
import { HiPhone } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {

  useEffect(() =>{
    Aos.init({duration:2000})
  },[])

  return (
    <div className="footer">
      <div className="secContainer container">
        <div className="content grid">
          <div data-aos='fade-up' data-aos-duration='2000' className="row">
            <div className="spanText">
              CONTACT US
            </div>

            <div className="contactDiv">
              <div className="flex">
              <HiPhone  className='icon'/>
              <span>+94 76 6715014</span>
              </div>
              

              <div className="flex">
              <MdEmail  className='icon'/>
              <span>mihirangasilva23@gmail.com</span>
              </div>
              

              <div className="flex">
              <FaLocationArrow className='icon'/>
              <span>+94 76 6715014</span>
              </div>
              
            </div>
          </div>

          <div data-aos='fade-up' data-aos-duration='3000'  className="row">
            <div className="spanText">
              POPULAR NEWS
            </div>
            <div className="singleNews">
              <span className="text">
              Explore the world with confidence! Discover the latest travel updates, tips, and destination highlights. Stay informed with TravelBuddy's curated news feed, bringing you the freshest insights for your next adventure.
               Start planning today!
              </span>
              <p>
                04 MAY ,2024
              </p>
            </div>

            <div className="singleNews">
              <span className="text">
              Explore the world with confidence! Discover the latest travel updates, tips, and destination highlights. Stay informed with TravelBuddy's curated news feed, bringing you the freshest insights for your next adventure. 
            Start planning today!
              </span>
              <p>
                05 MAY ,2024
              </p>
            </div>

            
          </div>

          <div data-aos='fade-up' data-aos-duration='4000' className="row">
            <div className="spanText">
              QUICK LINKS
            </div>
              <div  className="footerLinks">
                <ul>
                  <li>About Us</li>
                  <li>Our Team</li>
                  <li>Gallery</li>
                  <li>Blog</li>
                  <li>Careers</li>
                  
                </ul>
              </div>
          </div>
        </div>

        <div className="BottomDiv flex">
          <p><FaCopyright /> Copyright 2024 NMihiTech - All rights reserved</p>

          <div className="social flex">
          <FaFacebookF  className='icon'/>
          <AiFillYoutube  className='icon'/>
          <AiOutlineTwitter  className='icon'/>
          <AiFillInstagram  className='icon'/>

          </div>

          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
