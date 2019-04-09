import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/Layout"
import Img from 'gatsby-image'

export default ({ data }) => {
  const edges = data.allMarkdownRemark.edges
  return (
      <Layout>
        <div className="container">
          <header className="header">
            <h1>Student Projects</h1>
          </header>
          <main className="grid--wrap">
            {
              edges.map(edge => (
                <Link className="info-link" to={edge.node.fields.slug}>
                  <h4>{edge.node.frontmatter.title}</h4>
                  <Img fluid={edge.node.frontmatter.image.childImageSharp.fluid}/>
                </Link>
              ))
            }
          </main>
        </div>    
      </Layout>
  )
}

export const query = graphql`
{
  allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "projectTemplate"}}}) {
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
          image{
            childImageSharp {
              fluid(maxWidth: 350, quality: 100) {
                ...GatsbyImageSharpFluid
                presentationWidth
              }
            }
          }
        }
      }
    }
  }
}

`