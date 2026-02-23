import React from 'react'
import html from '../../assets/images/html5.png'
import css from '../../assets/images/css3.png'
import bootstrap from '../../assets/images/bootstrap.png'
import js from '../../assets/images/js.png'
import python from '../../assets/images/python.png'
import reacts from '../../assets/images/react.png'
import powerbi from '../../assets/images/powerbi.png'
import Django from '../../assets/images/djangopy.png'
import git from '../../assets/images/git.png'
import github from '../../assets/images/social.png'
import mongodb from '../../assets/images/mongodb.png'
import postman from '../../assets/images/postman.png'
import ReactBootstrap from '../../assets/images/reactbootstrap.png'
import vite from '../../assets/images/vite.png'
import '../skill/Skills.css'

function Skills() {
  return (
    <div className='container my-5'>
      <div className="my-5 text-center">
        <h1 className='text-center skill-head my-5'>Skills</h1>
        <h4 className='text-center text mt-4'>
  A showcase of my technical skills, tools, and technologies I’ve mastered for building data-driven and interactive solutions.
</h4>
        <div className=" row my-5 skills justify-content-center">
          <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center m-3">
            <img src={html} alt="html" /> 
          </div>
          
          <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center m-3">
            <img src={css} alt="css" />
          </div>
          
          <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center m-3">
            <img src={bootstrap} alt="bootstrap" />
          </div>
          
          <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center m-3">
            <img src={js} alt="js" />
          </div>
          
          <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center m-3">
            <img src={python} alt="python" />
          </div>
          
          
          <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center m-3" id='react'>
            <img src={reacts} alt="react" />
          </div>

          <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center m-3" id='react'>
            <img src={Django} alt="Django" />
          </div>

          <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center m-3" id='react'>
            <img src={git} alt="git" />
          </div>
          
          <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center m-3" id='react'>
            <img src={github} alt="github" />
          </div>

          <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center m-3" id='react'>
            <img src={mongodb} alt="mongodb" />
          </div>

          <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center m-3" id='react'>
            <img src={postman} alt="postman" />
          </div>

          <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center m-3" id='react'>
            <img src={ReactBootstrap} alt="ReactBootstrap" />
          </div>

          <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center m-3" id='react'>
            <img src={vite} alt="vite" />
          </div>
        
          <div className='SQL col-12 col-sm-6 col-lg-3 m-3'>
            <i className="fa-solid fa-database "></i> 
            <h3 className='mt-2 SQL-text'>SQL</h3>
          </div>
          
          <div className="col-12 col-sm-6 col-lg-3  m-3">
            <img src={powerbi} alt="Power bi" />
            <h4 className='mt-1 text-warning'>Power Bi</h4>
          </div>        
        </div>
      </div>
    </div>


    
  )
}

export default Skills