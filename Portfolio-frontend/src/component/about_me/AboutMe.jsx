import React from 'react'
import '../about_me/AboutMe.css'
import about_me_icon from '../../assets/images/abouticon.png'

function AboutMe() {
  return (
    <div className='container mt-5'>
      <h1 className=' about-head text-center mt-5'>About Me</h1>
        <div className='row'>

            <div className='col-12 col-lg-6 mt-3 d-flex align-items-center justify-content-center '>
                <img src={about_me_icon} alt="My Icon" className='img-fluid icon'/>
            </div>
            <div className='col-12 col-lg-6 '>
                
                <h4 className='text-center about_me mt-5 mb-5'>
                    I am a prospective Data Analyst and Frontend Developer with robust experience in   <span>SQL</span>,  <span>Python</span>, <span>Power BI</span>, <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span>, <span>Bootstrap</span>, <span>React</span>, and <span>Vite</span>. I love harnessing 
                    data and code to tackle real-world challenges—whether discovering insights in the depths 
                    of large datasets or crafting responsive, user-friendly web apps.
                    <br />
                    <br />
                    With hands-on experience in <span>Data Visualization</span>, <span>Database Design</span>, <span>Query Optimization</span>, and 
                  <span> ETL Pipelines</span>, I apply analytical thinking to each project. On the frontend, I like to create 
                    <span> Clean</span>, <span>Intuitive interfaces</span> and utilize modern tools to create <span>Fast</span>, <span>Scalable Applications</span>.
                    <br />
                    <br />
                    I love where data and design meet, and I'm excited to help projects that merge data-driven 
                    decision-making with compelling digital experiences.</h4>
            </div>
            
        </div>  
    </div>
  )
}

export default AboutMe