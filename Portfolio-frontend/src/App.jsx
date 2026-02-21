import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Introduction from './component/introduction/Introduction'
import Navbars from './component/navbar/Navbar'
import AboutMe from './component/about_me/AboutMe'
import Skills from './component/skill/Skills'
import Background from './component/background/Background'
import Certification from './component/certification/Certification'
import Project from './component/project/Project'
import Contact from './component/contact/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './component/footer/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    // <>
    // <div className='Portfolio'>
    //   <BrowserRouter>
    //     <Navbars/>
    //     <Routes>
    //       <Route path="/" element={<Introduction/>}/>
    //       <Route path="/AboutMe" element={<AboutMe/>}/>
    //       <Route path="/skills" element={<Skills/>}/>
    //       <Route path="/background" element={<Background/>}/>
    //       <Route path="/certification" element={<Certification/>}/>
    //       <Route path="/project" element={<Project/>}/>
    //       <Route path="/contact" element={<Contact/>}/>
          
    //       {/* <Introduction/>
    //       <AboutMe/>
    //       <Background/>
    //       <Skills/>
    //       <Project/>
    //       <Certification/>
    //       <Contact/> */}
    //     </Routes>
    //     <Footer/>
    //   </BrowserRouter>
      
    // </div>
    // </>
     <div className="Portfolio">
      <Navbars />

      <section id="home">
        <Introduction />
      </section>
      
      <section id="about">
        <AboutMe />
      </section> 

      <section id="background">
        <Background />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Project />
      </section>

      <section id="certifications">
        <Certification />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  )
}

export default App
