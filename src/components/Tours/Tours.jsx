import React, {useEffect} from 'react'
import './Tours.scss'

//impot image
import Image from '../Assets/sigiriya.jpg'
import Image1 from '../Assets/wipathu.jpg'
import Image2 from '../Assets/tea.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

//import icons
import { AiFillStar } from "react-icons/ai";

const Tours = () => {

  useEffect(() => {
    Aos.init({duration:2000})
  }, [])

  return (
    <div className="tours container section">
      <div className="secContainer">
        <span data-aos='fade-up' data-aos-duration='2000' className="secTitle">
          Hot Tours
        </span>

        <div className="tourContainer">
          <div data-aos='fade-up' data-aos-duration='2000' className="singleTour grid">
            <div className="imgDiv">
              <img src={Image}  />
            </div>
            <div className="tourInfo">
              <span className="tourTitle">
                SriLanka,Sigiriya
              </span>
              <div className="stra_review flex">
                <div className="stars">
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                </div>
                <small className='custReview'>
                  2 Customer Review
                </small>
              </div>
              <p>
              "My Sigiriya Rock Tour in Sri Lanka was phenomenal! The journey through lush landscapes to reach the ancient fortress was 
              mesmerizing. The ascent to the summit offered breathtaking views, and our guide shared fascinating historical insights. The tour was well-organized, and I highly recommend it for history and nature enthusiasts alike."</p>

              <button className='btn'>Buy This Tour</button>
            </div>

            <span className='price'>$790</span>
          </div>
          <div data-aos='fade-up' data-aos-duration='5000' className="singleTour grid">
            <div className="imgDiv">
              <img src={Image1}  />
            </div>
            <div className="tourInfo">
              <span className="tourTitle">
                Sri Lanka, Wipathu Tour
              </span>
              <div className="stra_review flex">
                <div className="stars">
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                </div>
                <small className='custReview'>
                  2 Customer Review
                </small>
              </div>
              <p>
"Unforgettable Sri Lanka Wildlife Safari! Our Wilpattu Leopard and Elephant Tour was a dream come true. The experience of spotting majestic leopards and gentle elephants in their natural habitat was awe-inspiring. Our knowledgeable guide ensured we didn't miss any highlights. 
Highly recommend this tour for wildlife enthusiasts!"</p>

              <button className='btn'>Buy This Tour</button>
            </div>

            <span className='price'>$790</span>
          </div>
          <div data-aos='fade-up' data-aos-duration='8000' className="singleTour grid">
            <div className="imgDiv">
              <img src={Image2}  />
            </div>
            <div className="tourInfo">
              <span className="tourTitle">
                Kandy,Badulla,SriLanka
              </span>
              <div className="stra_review flex">
                <div className="stars">
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                </div>
                <small className='custReview'>
                  2 Customer Review
                </small>
              </div>
              <p>
"
Visiting the tree plantations in Kandy and Badulla, Sri Lanka was truly mesmerizing. The lush greenery, neatly arranged rows of tea bushes,
 and serene atmosphere left a lasting impression. Watching the sunrise from these highlands was breathtaking—the chilly breeze, the soft glow of dawn, and the anticipation of a new day made it a magical experience. Truly unforgettable!"</p>

              <button className='btn'>Buy This Tour</button>
            </div>

            <span className='price'>$790</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tours
