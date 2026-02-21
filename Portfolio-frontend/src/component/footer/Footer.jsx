import React from 'react'
import '../footer/Footer.css'

function Footer() {
  return (
    <footer className="footer mt-5">
  <div className="footer-content">
    <p>© 2025 Lakshit Poojari </p>
    <p> Data Analyst & Full Stack Developer</p>
    <div className="social-icons">
      <a href="https://www.linkedin.com/in/lakshit-poojari/" target="_blank"><i className="fa-brands fa-linkedin "></i></a>
      <a href="https://github.com/Lakshit-Poojari" target="_blank"><i className="fa-brands fa-github"></i></a>
      <a href="mailto:lakshitp.2110@gmail.com"><i className="fa-solid fa-envelope"></i></a>
    </div>
  </div>
</footer>
  )
}

export default Footer