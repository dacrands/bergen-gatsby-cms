import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import Video from "../components/Video"
import Form from "../components/Form"

export default ({ data }) => {
  const edges = data.allFile.edges
  return (
    <Layout>
      <header className="landing">
        <div className="landing__title">
          <h1>Bergen STEM</h1>
          <p className="content">
            Science, Technology, Engineering, Mathematics at Bergen Community
            College
          </p>
          <Link to="#contact" className="btn landing__link">
            Join STEM
          </Link>
          <Link to="/about" className="btn btn--dark landing__link">
            Learn More
          </Link>
        </div>
      </header>
      <section className="section section--border section--big bg-light">
          <div className="grid-two grid-two--big container center">
            <div className="section__media">
              <Img fluid={edges[3].node.childImageSharp.fluid} />
            </div>
            <div className="section__content">
              <h2>Research</h2>
              <p>
                From rockets to algae biodiesel, Bergen Community college offers
                STEM students a wide variety of research opportunities.
              </p>
              <Link to="/projects" className="btn">
                Student Projects
              </Link>
            </div>
          </div>        
      </section>
      <section className="section section--border section--big bg-med">        
          <div className="grid-two grid-two--big container center">
            <div className="section__content">
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
            <div className="section__media">
              <Img fluid={edges[0].node.childImageSharp.fluid} />
            </div>
          </div>        
      </section>

      <section className="section section--border section--big bg-light">        
          <div className="grid-two grid-two--big container center">
            <div className="section__media">
              <Img fluid={edges[2].node.childImageSharp.fluid} />
            </div>
            <div className="section__content">
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
              <Link className="btn" to="/">
                Running Start Program
              </Link>
            </div>
          </div>        
      </section>

      <section className="section section--dark section--big bg-dark">        
          <div className="container center">
            <div className="section__content">
              <h2>Students Talking STEM</h2>
              <p>
                Listen to BCC students discuss their experiences in the STEM
                program.
              </p>
            </div>
            <div className="section__media">
              <Video />
            </div>
          </div>        
      </section>

      <section className="section section--big bg-med">        
          <div className="container">
            <div className="center">
              <div className="section__content center--text">
                <h2>Want to get involved at STEM?</h2>
                <p className="content">
                  We are always looking for passionate students to propose new
                  research projects or join current research teams. If you wish
                  to get involved in STEM at Bergen Community College, fill out
                  the form below.
                </p>
              </div>
              <Form />
            </div>
          </div>        
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allFile(filter: { relativePath: { regex: "/landing/" } }) {
      edges {
        node {
          id
          childImageSharp {
            id
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
