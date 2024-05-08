import React from 'react'
import './Staff.scss'

//Import images
import user1 from '../Assets/nirmal.jpg'

const Staff = () => {
  return (
      
  <div className="staff container section">
    <div className="secContainer">
      <span className="secTitle">
        Different People - One Misssion
      </span>

      <div className="staffContainer grid">
        <div className="singlestaff">
          <div className="imgDiv">
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
            +076 67 15014
          </span>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Staff
