import React, {useEffect} from 'react'
import './Discount.scss'

import Aos from 'aos'
import 'aos/dist/aos.css'

//import video

import video from '../Assets/video.mp4'

const Discount = () => {

useEffect (() => {
  Aos.init({duration:2000})
}, [])

  return (
    <div>
      <div className="discount section">
        <div className="secContainer">
          <video src={video} autoPlay loop muted typeof='mp4'></video>
          <div className="textDiv">
            <span data-aos='fade-left' data-aos-duration='2500' className="title">
              Sign Up for 35% discount
            </span>
            <p data-aos='fade-right' data-aos-duration='3500'>
              Try This Exclusive Discount Today! Won't Regret For Your Entire Lifetime!
            </p>

            <div className="input_btn flex">
              <input data-aos='fade-up' data-aos-duration='4000' type="text" placeholder='Enter Your Email' />
              <button data-aos='fade-up' data-aos-duration='4000' className='btn'>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discount
