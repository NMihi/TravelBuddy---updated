import React, {useEffect} from 'react'
import './Review.scss'

import Aos from 'aos'
import 'aos/dist/aos.css'

//import image
import Imagerev from '../Assets/review.jpg'
import Imagerev2 from '../Assets/review2.jpg'
import Imagerev3 from '../Assets/review3.jpg'

const Review = () => {

  useEffect (() => {
    Aos.init({duration:2000})
  }, [])

  return (
    <div className="review section">
      <div className="secContainer">
        <span data-aos='fade-up' data-aos-duration='2000' className="secTitle">
          what people say
        </span>

        <div className="reviewContainer container grid">
          <div data-aos='fade-right' data-aos-duration='2500' className="singleReview">
            <div className="imgDiv">
              <img src={Imagerev} />
            </div>

            <p>
              
"Sri Lanka was a dream destination! Made even better with my travel buddy from Travel Buddy Website. Highly recommend!"
            </p>

            <div className="name">
              Ferguson Huss
            </div>
          </div>

          <div data-aos='fade-up' data-aos-duration='3000' className="singleReview">
            <div className="imgDiv">
              <img src={Imagerev2} />
            </div>

            <p>
              
"Sri Lanka was a dream destination! Made even better with my travel buddy from Travel Buddy Website. Highly recommend!"
            </p>

            <div className="name">
              Rebeka Foxx
            </div>
          </div>

          <div data-aos='fade-left' data-aos-duration='3500' className="singleReview">
            <div className="imgDiv">
              <img src={Imagerev3} />
            </div>

            <p>
              
"Sri Lanka was a dream destination! Made even better with my travel buddy from Travel Buddy Website. Highly recommend!"
            </p>

            <div className="name">
              wonder couple
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review
