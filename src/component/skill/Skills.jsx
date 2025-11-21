import React from 'react'
import html from '../../assets/images/html5.png'
import css from '../../assets/images/css3.png'
import bootstrap from '../../assets/images/bootstrap.png'
import js from '../../assets/images/js.png'
import python from '../../assets/images/python.png'
import pandas from '../../assets/images/pandas.png'
import reacts from '../../assets/images/react.png'
import Sql from '../../assets/images/SQL.png'
import powerbi from '../../assets/images/powerbi.png'
import '../skill/Skills.css'

function Skills() {
  return (
    <div className='container mt-5'>
      <div className="mt-5 text-center">
        <h1 className='text-center skill-head mt-5'>Skills</h1>
        <h4 className='text-center text text-muted mt-4'>
  A showcase of my technical skills, tools, and technologies I’ve mastered for building data-driven and interactive solutions.
</h4>
        <div className=" row mt-5 skills justify-content-center">
          <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center">
            <img src={html} alt="html" /> 
          </div>
          
          <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center ">
            <img src={css} alt="css" />
          </div>
          
          <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center">
            <img src={bootstrap} alt="bootstrap" />
          </div>
          
          <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center">
            <img src={js} alt="js" />
          </div>
          
          <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center">
            <img src={python} alt="python" />
          </div>
          
          
          <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center" id='react'>
            <img src={reacts} alt="react" />
          </div>
        
          <div className='SQL col-12 col-sm-6 col-lg-3 '>
            <i className="fa-solid fa-database "></i> 
            <h3 className='mt-2 SQL-text'>SQL</h3>
          </div>
          
          <div className="col-12 col-sm-6 col-lg-3  ">
            <img src={powerbi} alt="Power bi" />
            <h4 className='mt-1 text-warning'>Power Bi</h4>
          </div>        
        </div>
      </div>
    </div>


    
  )
}

export default Skills