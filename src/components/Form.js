    
import React from 'react'
import { navigate } from 'gatsby'

const MAJORS = ["Physics", "Engineering", "Chemistry", "Biology", "CompSci", "Mathematics"]

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      major: "",
      message: "",
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action'), { state: { formSubmit: true } }))
      .catch(error => alert(error))
  }

  render() {
    return (              
          <form
            className="form"
            name="contact"
            method="post"
            action="/success/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >            

            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out:{' '}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </p>            
            <p className="form__item">
              <label>
                Name
                <input
                  required
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                />
              </label>
            </p>
            <p className="form__item">
              <label>
                Email
                <input
                  required
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                />
              </label>
            </p>
            <p className="form__item">
              <label>
                Major
                <select
                  required                  
                  name="major"
                  onChange={this.handleChange}
                >
                  {
                    MAJORS.map(m => (
                      <option key={m} value={m}>{m}</option>
                  ))
                }
                </select>
              </label>
            </p>
            <p className="form__item">
              <label>
                Research Interests:
                <textarea
                  required
                  rows="5"
                  name="message"
                  onChange={this.handleChange}
                />
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




// import React, { Component } from "react"

// class Form extends Component {
//   render() {
//     return (
//       <form
//         className="form"
//         name="contact"
//         method="POST"
//         netlify-honeypot="bot-field"
//         data-netlify="true"
//       >
//         <p class="hidden">
//           <label>
//             Don’t fill this out if you're human: <input name="bot-field" />
//           </label>
//         </p>
//         <p>
//           <label>
//             First Name
//             <input type="text" name="first" />
//           </label>
//         </p>
//         <p>
//           <label>
//             Last Name
//             <input type="text" name="last" />
//           </label>
//         </p>
//         <p>
//           <label>
//             Email
//             <input size="35" type="text" name="email" />
//           </label>
//         </p>
//         <p>
//           <label>
//             Research Interests:
//             <textarea name="message" rows="5"/>
//           </label>
//         </p>
//         <p>
//           <button className="btn" type="submit">
//             Send
//           </button>
//         </p>
//       </form>
//     )
//   }
// }

// export default Form
