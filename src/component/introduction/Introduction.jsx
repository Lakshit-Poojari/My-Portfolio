import React from 'react'
import logo from '../../assets/images/logo.png'
import '../introduction/Introduction.css'
import AboutMe from '../about_me/AboutMe'
import Background from '../background/Background'
import Skills from '../skill/Skills'
import Project from '../project/Project'
import Certification from '../certification/Certification'
import Contact from '../contact/Contact'


function Introduction() {
  return (
    <>
    <div className="container Introduction ">
        <div className="row mt-5">
            <div className="col-12 col-lg-6  mt-4 order-2 order-lg-1">
              <h2 className="text-center mt-5">Hello and Welcome!</h2>
                <h2 className="text-center mt-5"> I'm <span >Lakshit </span><span> Poojari</span></h2>
                <p className="text-center mt-5"><span>Passionate Developer </span>|<span> Creative Thinker </span>|<span> Lifelong Learner</span></p><br />
                <p className="text-center mt-5">Welcome to my own portfolio — a place where I highlight my work, chronicle my journey, and 
                  share my enthusiasm for technology and innovation.</p>
                <p className="text-center mt-3">Have a look around, browse my projects, and learn about the mind that crafts the code.
                  I look forward to connecting, working together, and making something meaningful.</p>
                {/* <p className="text-center mt-5">Frontend Developer / Data Analyst</p> */}
            </div>
            <div className="col-12 col-lg-6  d-flex align-items-center justify-content-center order-1 order-lg-2">
                <img src={logo} alt="My Image" className='Profile img-fluid  '/>
            </div>
        </div>
    </div>
          {/* <AboutMe/>
          <Background/>
          <Skills/>
          <Project/>
          <Certification/>
          <Contact/> */}
    </>
  )
}

export default Introduction