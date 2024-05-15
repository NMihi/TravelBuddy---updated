import React, {useEffect} from 'react'
import './Staff.scss'

import Aos from 'aos'
import 'aos/dist/aos.css'

//Import images
import user1 from '../Assets/nirmal.jpg'

const Staff = () => {

  useEffect(() => {
    Aos.init({duration:3000})
  }, [])

  return (
      
  <div className="staff container section">
    <div className="secContainer">
      <span data-aos='fade-up' data-aos-duration='5000' className="secTitle">
        Different People - One Misssion
      </span>

      <div className="staffContainer grid">
        <div data-aos='fade-left' data-aos-duration='2000' className="singlestaff">
          <div data-aos='fade-right' data-aos-duration='2000' className="imgDiv">
            <img src={user1} />
          </div>

          <span className='name'>
            Nirmal Mihiranga
          </span>
          <span className='jobtitle'>
            Founder @TravelBuddy
          </span>
          <span className='title2'>Software Engineer</span>
          <span className='contact'>
            076 67 15014
          </span>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Staff
