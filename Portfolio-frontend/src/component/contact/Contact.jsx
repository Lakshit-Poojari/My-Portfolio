import React, { useState } from 'react'
import '../contact/Contact.css'
import axios from "axios";

function Contact() {

  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })


  const handleChange = (e) =>{
    setformdata({
      ...formdata,
      [e.target.name] : e.target.value,
    })
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://my-portfolio-c68z.onrender.com/api/contact/",
      // "http://127.0.0.1:8000/api/contact/",
      formdata,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    alert("Message sent successfully ✅");

    // clear form
    setformdata({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    } catch (error) {
      console.error(error);
      alert("Failed to send message ❌");
    }

  }
  
  return (
    <>
    <div className='container contactMain mt-5'>
      <h1 className='contact mt-5 text-center'>Contact</h1>
      <div className='row'>
        <div className='d-flex justify-content-center text-center col-12 col-lg-6 mt-5'>
          <div className='form'>
            <form onSubmit={handleSubmit}>
              
              <input  name="name"
                      value={formdata.name}
                      onChange={handleChange} type="text" className='input mt-4' placeholder="Enter your Name"/> <br />
              
              <input  name="email"
                      value={formdata.email}
                      onChange={handleChange} type="email" className='input mt-4' placeholder="Enter your Email id"/><br />

              <input  name="phone"
                      value={formdata.phone}
                      onChange={handleChange} type="tel" className='input mt-4' placeholder="Enter your Phone Number"/><br />
              
              <textarea name="message"
                        value={formdata.message} 
                        onChange={handleChange} 
                        rows="4" cols="50" 
                        className='text-area mt-4' 
                        placeholder="Enter your message here..."></textarea><br />
              <button type="submit" className='send btn text-center mt-2'>SEND</button>
            </form>
          </div>
        </div>
        <div className='contact_detail col-12 col-lg-6 mt-5'>
          <div>
            <div className='contact-text justify-content-center'>
              <p>I'm always open to connecting, collaborating, or discussing new opportunities. Feel free to reach out through any of the following:</p>
            </div>
            <div className=' contact_method mt-3'>
              <a href='tel:9869620509'><i className="fa-solid fa-phone f-left"></i>: +91-9869620509</a>
            </div>
            
            <div className='contact_method mt-3'>
              <a href="https://www.linkedin.com/in/lakshit-poojari/" ><i className="fa-brands fa-linkedin "></i>: Linkedin Profile</a>
            </div>
            
            <div className='contact_method mt-3 '>
              <a href="https://github.com/Lakshit-Poojari"><i className="fa-brands fa-github"></i>: Github Profile</a>
            </div>
            
            <div className='contact_method mt-3 '>
              <a href="mailto:lakshitp.2110@gmail.com"><i className="fa-solid fa-envelope"></i>: lakshitp.2110@gmail.com</a>
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