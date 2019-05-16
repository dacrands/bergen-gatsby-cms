import React, { Component } from "react"

class Form extends Component {
  render() {
    return (
      <form
        className="form"
        name="contact"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <p class="hidden">
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        <p>
          <label>
            First Name
            <input type="text" name="first" />
          </label>
        </p>
        <p>
          <label>
            Last Name
            <input type="text" name="last" />
          </label>
        </p>
        <p>
          <label>
            Email
            <input size="35" type="text" name="email" />
          </label>
        </p>
        <p>
          <label>
            Research Interests:
            <textarea name="message" rows="5"/>
          </label>
        </p>
        <p>
          <button className="btn" type="submit">
            Send
          </button>
        </p>
      </form>
    )
  }
}

export default Form
