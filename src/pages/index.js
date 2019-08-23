import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import Video from "../components/Video"
import Form from "../components/Form"

export default ({ data }) => {
  return (
    <Layout>
      <header className="landing">
        <div className="landing__title">
          <h1>Bergen STEM</h1>
          <p className="content">
            Science, Technology, Engineering, Mathematics at Bergen Community
            College
          </p>
          <a href="#contact" className="btn landing__link">
            Join STEM
          </a>
          <Link to="/about" className="btn btn--dark landing__link">
            Learn More
          </Link>
        </div>
      </header>

      <section className="section section--border section--big bg-light">
          <div className="row container center">
            <div className="col section__media">
              <Img fluid={data.image1.childImageSharp.fluid} alt="Scientific beakers filled with algae fluid" />
            </div>
            <div className="col section__content">
              <h2>Research</h2>
              <p>
                From rockets to algae biodiesel, Bergen Community college offers
                STEM students a wide variety of research opportunities.
              </p>
              <p>
                If you are a STEM student and are looking to get involved in
                research, be sure to check out the current projects.
              </p>
              <Link to="/projects" className="btn">
                Student Projects
              </Link>
            </div>
          </div>        
      </section>

      <section className="section section--border section--big bg-med">        
          <div className="row container center">
            <div className="col section__content">
              <h2>STEM Student Scholars (3SP)</h2>
              <p>
                Promotes excellence in knowledge, skills and ability of a select
                group of STEM students to ensure their success in securing
                research internships and successful transfer to their targeted
                4-year institution.
              </p>
              <Link to="/3sp" className="btn">
                3SP
              </Link>
            </div>
            <div className="col section__media">
              <Img fluid={data.image2.childImageSharp.fluid} alt="Aeriel drone" />
            </div>
          </div>        
      </section>

      <section className="section section--border section--big bg-light">        
          <div className="row container center">
            <div className="col section__media">
              <Img fluid={data.image3.childImageSharp.fluid} alt="Student and professor working on solar energy project"/>
            </div>
            <div className="col section__content">
              <h2>Running Start Program</h2>
              <p>
                Prep Classes are designed to give students a better foundation
                to start the courses they will be taking in the upcoming
                semesters.
              </p>
              <p>
                Eligible students have the option of taking the respective
                proficiency exam after completing the boot camp and possibly
                test out of the course.
              </p>
              <a target="_blank" rel="noopener noreferrer" href="https://bergen.edu/faculty-staff/grants-administration/awards/stem/running-start-program/" className="btn">
                Running Start Program
              </a>
            </div>
          </div>        
      </section>

      <section className="section section--dark section--big bg-dark">        
          <div className="container center">
            <div className="section__content">
              <h2>Students Talking STEM</h2>              
            </div>
            <div className="section__media">
              <Video />
            </div>
          </div>        
      </section>

      <section className="section section--big bg-med">        
          <div className="container">
            <div className="row center">
              <div className="col section__content">
                <h2>Want to get involved in STEM?</h2>
                <p>
                  We are always looking for passionate students to propose new
                  research projects or join current research teams. If you wish
                  to get involved in STEM at Bergen Community College, fill out this form
                  with your name, email, and research interests.
                </p>
              </div>
              <Form className="col"/>
            </div>
          </div>        
      </section>
    </Layout>
  )
}

export const query = graphql`
query {
  image1: file(relativePath: { regex: "/landing-1/" }) {
    id
    childImageSharp {
      id
      fluid {
        ...GatsbyImageSharpFluid
      } 
    }
  }
  image2: file(relativePath: { regex: "/landing-2/" }) {
    id
    childImageSharp {
      id
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  image3: file(relativePath: { regex: "/solar/" }) {
    id
    childImageSharp {
      id
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
