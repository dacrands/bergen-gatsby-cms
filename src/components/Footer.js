import React from 'react'

export default () => (
  <footer className="footer">
    <small className="container flex--wrap">
    <section className="footer__item">
      <h3>Location</h3>
      <address>
        Room S-315<br/>      
        400 Paramus Road<br/>      
        Paramus, NJ 07652<br/>                
      </address>
    </section>
    <section className="footer__item">
      <h3>Social Media</h3>
      <ul>
        <li><a href="http://" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href="http://" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li><a href="http://" target="_blank" rel="noopener noreferrer">Instagram</a></li>
      </ul>
    </section>
    <section className="footer__item">
      <h3>Resources</h3>
      <ul>
        <li><a href="http://" target="_blank" rel="noopener noreferrer">bergen.edu</a></li>
        <li><a href="http://" target="_blank" rel="noopener noreferrer">Running Start Program</a></li>
        {/* <li><a href="http://" target="_blank" rel="noopener noreferrer">Instagram</a></li> */}
      </ul>
    </section>
    
    </small>
    
    <div className="citation">    
      <small>
        David Crandall, {new Date().getFullYear()}    
      </small>                    
    </div>
    
  </footer>
)