import React from 'react'

export default () => (
  <footer className="footer">
    <small className="container flex--wrap">
    <section className="footer__item">
      <h4>Location</h4>
      <address>
        Room S-315<br/>      
        400 Paramus Road<br/>      
        Paramus, NJ 07652<br/>                
      </address>
    </section>
    <section className="footer__item">
      <h4>Social Media</h4>
      <ul>
        <li><a href="http://" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href="http://" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li><a href="http://" target="_blank" rel="noopener noreferrer">Instagram</a></li>
      </ul>
    </section>
    <section className="footer__item">
      <h4>Resources</h4>
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