import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

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
                templateKey
                abstract                
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
          <header>
            <h2>Projects</h2>
          </header>
          <nav className="aside__nav">
            <ul className="aside__nav-list">
              {edges.map(edge => (
                <li key={edge.node.id}>
                  <Link
                    to={edge.node.fields.slug}
                    className="aside__link"
                    activeClassName="aside__link--active"
                  >
                    <div className="aside__link--overlay">
                      <p className="aside__link-p">
                        {edge.node.frontmatter.title}
                      </p>
                    </div>                    
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      )
    }}
  />
)
