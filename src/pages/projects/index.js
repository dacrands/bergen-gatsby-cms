import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/Layout"
import Img from "gatsby-image"

export default ({ data }) => {
  const edges = data.allMarkdownRemark.edges
  const [query, setQuery] = useState("")

  return (
    <Layout>
      <div style={{ paddingBottom: "50px" }} className="container">
        <header className="header header--mb">
          <h1>Student Projects</h1>
          <input
            className="search"
            type="search"
            placeholder="Search projects..."
            q="projectsearch"
            onChange={e => setQuery(e.target.value)}
          />
        </header>
        <main className="grid-wrap">
          {edges
            // Filter links using query
            .filter(edge => {
              return edge.node.frontmatter.title
                .toLowerCase()
                .includes(query.toLowerCase())
            })
            // Display filtered links
            .map(edge => (
              <Link
                key={edge.node.id}
                className="info-link"
                to={edge.node.fields.slug}
              >
                <h4>{edge.node.frontmatter.title}</h4>
                <Img
                  fluid={edge.node.frontmatter.image.childImageSharp.fluid}
                />
              </Link>
            ))}
        </main>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "projectTemplate" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            abstract
            image {
              childImageSharp {
                fluid(
                  maxWidth: 350
                  quality: 80
                  traceSVG: { background: "#fff", color: "rgb(162, 153, 199)" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
