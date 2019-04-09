import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/Layout"


export default ({ data }) => {
  const edges = data.allMarkdownRemark.edges
  console.log(edges)
  return (
      <Layout>
        <div className="container">
          <header className="header">
            <h1>Student Projects</h1>
          </header>
          <main>
            {
              edges.map(edge => (
                <Link to={edge.node.fields.slug}>
                  {edge.node.frontmatter.title}
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
        }
      }
    }
  }
}

`