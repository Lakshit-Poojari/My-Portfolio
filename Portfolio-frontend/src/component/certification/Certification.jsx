import React from 'react'
import '../certification/Certification.css'

function Certification() {
  return (
    <div className="container mt-5">
      <h1 className='certification mt-5 text-center'>Certification</h1>
      <div className='certification-text mt-5'>
        <h4>Here are the certifications I’ve earned, highlighting my expertise in both front-end development 
          and data analysis. These certifications demonstrate my strong foundation in technologies such as HTML,
           CSS, JavaScript, React, and Python, as well as my ability to work with data using tools like SQL 
           and Power BI.</h4>

          <h4 className='mt-4'>They reflect my commitment to continuous learning and staying updated with the latest industry 
            standards in building responsive, user-friendly interfaces and transforming raw data into actionable 
            insights.</h4>
          <br />
          <p className='cert-link '><a href="https://www.linkedin.com/in/lakshit-poojari/details/certifications/">👉 Click here to view my certifications! 👈</a></p>
      </div>
    </div>
  )
}

export default Certification