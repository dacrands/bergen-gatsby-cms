import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query ProjectsQuery {
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
              }
            }
          }
        }
      }
    `}
    render={data => {
      const edges = data.allMarkdownRemark.edges
      
      return (
        <aside className="aside">
          <nav className="aside__nav">            
              {edges.map(edge => (                
                  <Link
                    key={edge.node.id}
                    to={edge.node.fields.slug}
                    className="aside__link"
                    activeClassName="aside__link--active"
                  >                    
                    {edge.node.frontmatter.title}                  
                  </Link>                
              ))}            
          </nav>
        </aside>
      )
    }}
  />
)
