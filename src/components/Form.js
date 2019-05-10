import React, { Component } from "react"

class Form extends Component {
  render() {
    return (
      <form className="form" name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">        
          <h3>Contact Us</h3> 
          <hr/>
          <p class="hidden">
            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
          </p>
          <p>
            <label>First Name
            <input type="text" name="first" /></label>
          </p>
          <p>
            <label>Last Name
            <input type="text" name="last" /></label>
          </p>
          <p>
            <label>Email
            <input size="35" type="text" name="email" /></label>
          </p>
          <p>
            <label>Message
            <textarea name="message" cols="40" rows="5"></textarea></label>
          </p>
          <p>
            <button className="btn" type="submit">Send</button>
          </p>
        </form>      
    )
  }
}

export default Form