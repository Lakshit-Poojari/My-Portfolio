import React from 'react'
import '../project/Project.css'
import hr from "../../assets/images/HR_Analytics.png"
import Adventure from "../../assets/images/Adventure.png"
import Restaurantly from "../../assets/images/img.png"

const projects =[
  { Img: `${hr}` , title: ' HR_Analystics_Power_Bi', description: 'This project focuses on HR Analytics using Power BI , providing insights into workforce trends, employee performance, attrition, and diversity. The goal is to help HR teams make data-driven decisions to improve employee retention and workplace efficiency.', link:"https://github.com/Lakshit-Poojari/HR_Analystics_Power_Bi"},
  { Img: `${Adventure}`, title: 'Adventure', description: '', link:"https://github.com/Lakshit-Poojari/Adventure"},
  { Img: `${Restaurantly}`, title: 'Restaurantly', description: 'Restaurantly is a fully responsive, modern restaurant website template built with HTML, CSS, JavaScript, Bootstrap, and Slick Carousel. It’s designed to showcase a restaurant’s brand, menu, events, and services with an elegant user experience and smooth interactions.', link:"https://github.com/Lakshit-Poojari/Restaurantly"},
]

function Project() {
  return (
    <div className='container my-5'>
      <h1 className='project my-5 text-center'>Project</h1>
      <div className='row'>
        
          {projects.map ((projects,index) =>(
            <div key={index} className='col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 my-3'>
            <div className='card projectcard'>
              <img src={projects.Img} alt='thumb nail' className='proimg mx-auto d-block'></img>
              <div className='card-body'>
                <h3 className='card-title mt-4'>{projects.title}</h3>
                <p className='card-text mt-3'>{projects.description}</p>
                
                <a href={projects.link}><button  className='btn '>Github Link</button></a>
              </div>
            </div> 
            </div>
         ))}
        
      </div>
    </div>
  )
}

export default Project