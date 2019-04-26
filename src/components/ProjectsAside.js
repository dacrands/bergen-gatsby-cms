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
                image {
                  childImageSharp {
                    fixed(height: 120, quality: 100) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
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
            <ul className="aside__nav-list">
              {edges.map(edge => (
                <li key={edge.node.id}>
                  <Link
                    to={edge.node.fields.slug}
                    className="aside__link"
                    activeClassName="aside__link--active"
                  >
                    <div className="aside__link--overlay flex--center">
                      <p className="aside__link-p">
                        {edge.node.frontmatter.title}
                      </p>
                    </div>
                    <Img
                      fixed={edge.node.frontmatter.image.childImageSharp.fixed}
                    />
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
