import React from 'react'

import './Review.scss'

//import image
import Imagerev from '../Assets/review.jpg'
import Imagerev2 from '../Assets/review2.jpg'
import Imagerev3 from '../Assets/review3.jpg'

const Review = () => {
  return (
    <div className="review section">
      <div className="secContainer">
        <span className="secTitle">
          what people say
        </span>

        <div className="reviewContainer container grid">
          <div className="singleReview">
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

          <div className="singleReview">
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

          <div className="singleReview">
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
