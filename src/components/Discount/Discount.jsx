import React from 'react'
import './Discount.scss'

//import video

import video from '../Assets/video.mp4'

const Discount = () => {
  return (
    <div>
      <div className="discount section">
        <div className="secContainer">
          <video src={video} autoPlay loop muted typeof='mp4'></video>
          <div className="textDiv">
            <span className="title">
              Sign Up for 35% discount
            </span>
            <p>
              Try This Exclusive Discount Today! Won't Regret For Your Entire Lifetime!
            </p>

            <div className="input_btn flex">
              <input type="text" placeholder='Enter Your Email' />
              <button className='btn'>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discount
