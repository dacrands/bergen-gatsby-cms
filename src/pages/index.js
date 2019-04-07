import React from "react"
import { Link } from "gatsby"

import wave from "../../static/img/groundstation.jpg"

import Navbar from "../components/Navbar"

import "../styles/main.scss"

export default () => {
  return (
    <div>
      <Navbar />
      <div className="landing">
        <div className="landing__title">
          <h1>Bergen STEM</h1>
          <p>
            Science, Technology, Engineering, Mathematics at Bergen Community
            College
          </p>
          <Link className="btn landing__link">Join STEM</Link>
          <Link className="btn btn--dark landing__link">Learn More</Link>
        </div>
      </div>
      <section className="section bg-light">
        <div className="content">
          <h2>Research</h2>
          <p>
            From rockets to algae biodiesel, Bergen Community college offers
            STEM students a wide variety of research opportunities.
          </p>
          <Link className="btn" to="/">
            Student Projects
          </Link>
        </div>
        <div className="section__media">
          <img className="fluid" src={wave} alt="" />
        </div>
      </section>
      <section className="section bg-med">
        <div className="section__media">
          <img className="fluid" src={wave} alt="" />
        </div>
        <div className="content center">
          <h2>Running Start Program</h2>
          <p>
          Prep Classes are designed to give students a better foundation to start the courses they will be taking in the upcoming semesters.
          </p>
          <Link className="btn" to="/">
            Running Start Program
          </Link>
        </div>
      </section>
    </div>
  )
}
