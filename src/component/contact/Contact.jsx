import React from 'react'
import '../contact/Contact.css'
import Introduction from '../introduction/Introduction'
import AboutMe from '../about_me/AboutMe'
import Background from '../background/Background'
import Skills from '../skill/Skills'
import Project from '../project/Project'
import Certification from '../certification/Certification'

function Contact() {
  return (
    <>
      {/* <Introduction/>
      <AboutMe/>
      <Background/>
      <Skills/>
      <Project/>
      <Certification/> */}
    <div className='container contactMain'>
      <h1 className='contact mt-5 text-center'>Contact</h1>
      <div className='row'>
        <div className='d-flex justify-content-center text-center col-12 col-lg-6 mt-5'>
          <div className='form'>
            <form >
              
              <input type="text" className='input mt-4' placeholder="Enter your Name"/> <br />
              
              <input type="email" className='input mt-4' placeholder="Enter your Email id"/><br />

              <input type="tel" className='input mt-4' placeholder="Enter your Phone Number"/><br />
              
              <textarea rows="4" cols="50" className='text-area mt-4' placeholder="Enter your message here..."></textarea><br />
              <button className='send btn text-center mt-2'>SEND</button>
            </form>
          </div>
        </div>
        <div className='contact_detail col-12 col-lg-6 mt-5'>
          <div>
            <div className='contact-text justify-content-center'>
              <p>I'm always open to connecting, collaborating, or discussing new opportunities. Feel free to reach out through any of the following:</p>
            </div>
            <div className=' contact_method mt-3'>
              <a href='tel:24357786756767'><i class="fa-solid fa-phone f-left"></i>: +91-9869620509</a>
            </div>
            
            <div className='contact_method mt-3'>
              <a href="https://www.linkedin.com/in/lakshit-poojari/" ><i class="fa-brands fa-linkedin "></i>: Linkedin Profile</a>
            </div>
            
            <div className='contact_method mt-3 '>
              <a href="https://github.com/Lakshit-Poojari"><i class="fa-brands fa-github"></i>: Github Profile</a>
            </div>
            
            <div className='contact_method mt-3 '>
              <a href="mailto:lakshitp.2110@gmail.com"><i class="fa-solid fa-envelope"></i>: lakshitp.2110@gmail.com</a>
            </div>

            <div className='mt-5 contact-text'>
              <p>Or, simply fill out the form to send me a direct message — just enter your name, email, phone number, and your message. I’ll get back to you as soon as possible!</p>
            </div>

            <div className=''>
              <a href="resume.pdf" target="_blank" rel="noopener noreferrer">
                <button className='resume mt-4'>RESUME</button>
              </a>
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact