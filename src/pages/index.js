import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"

export default ({ data }) => {
  const edges = data.allFile.edges
  return (
    <Layout>
      <div className="landing">
        <div className="landing__title">
          <h1>Bergen STEM</h1>
          <p className="content">
            Science, Technology, Engineering, Mathematics at Bergen Community
            College
          </p>
          <Link className="btn landing__link">Join STEM</Link>
          <Link className="btn btn--dark landing__link">Learn More</Link>
        </div>
      </div>

      <section className="section bg-light">
        <div className="grid--two container center">
          <div className="section__content">
            <h2>Research</h2>
            <p>
              From rockets to algae biodiesel, Bergen Community college offers
              STEM students a wide variety of research opportunities.
            </p>
            <Link className="btn" to="/projects">
              Student Projects
            </Link>
          </div>
          <div className="section__media">
            <Img fluid={edges[3].node.childImageSharp.fluid} />
          </div>
        </div>
      </section>

      <section className="section bg-med">
        <div className="grid--two container center">
          <div className="section__content">
            <h2>STEM Student Scholars (3SP)</h2>
            <p>
              Promotes excellence in knowledge, skills and ability of a select
              group of STEM students to ensure their success in securing
              research internships and successful transfer to their targeted
              4-year institution.
            </p>
            <Link className="btn" to="/">
              3SP
            </Link>
          </div>
          <div className="section__media">
            <Img fluid={edges[0].node.childImageSharp.fluid} />
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="grid--two container center">
          <div className="section__content">
            <h2>Running Start Program</h2>
            <p>
              Prep Classes are designed to give students a better foundation to
              start the courses they will be taking in the upcoming semesters.
            </p>
            <p>
              Eligible students have the option of taking the respective
              proficiency exam after completing the boot camp and possibly test
              out of the course.
            </p>
            <Link className="btn" to="/">
              Running Start Program
            </Link>
          </div>
          <div className="section__media">
            <Img fluid={edges[2].node.childImageSharp.fluid} />
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
