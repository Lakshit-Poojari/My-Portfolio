import React from 'react'
import '../background/Background.css'

function Background() {
  return (
    
      <div className="container">    
        <h1 className='mt-2 text-center'>Educational Background</h1>
        <div className="row mt-5">
          <div className=' edu col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 text-center mt-3'>
            <div className='card educard'>
              <h2 className='institute mt-2'>Universal College of Engineering</h2>
              <p className=' mt-4'>Duration: 2020-2024</p>
              <p>Bachelor's of Engineering in Information Technology</p>
              <p>Score: 7.44/10 CGPI</p>
            </div>            
          </div>
          <div className=' edu col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 text-center mt-3'>
            <div className='card educard'>
              <h2 className='institute mt-2'>Sardar Vallabhbhai Patel Junior College of Science</h2>
              <p className=' mt-4'>Duration: 2018-2020</p>
              <p>Stream: Science</p>
              <p>12th HSC : 2019-2020</p>
              <p>Score: 60%</p>
            </div>
          </div>
          <div className=' edu col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 text-center mt-3'>
            <div className='card educard'>
              <h2 className='institute mt-2'>St Francis High School</h2>
              <p className=' mt-4'>Duration: 2008-2018</p>
              <p>10th SSC : 2017-2018</p>
              <p>Score: 77.4%</p>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default Background