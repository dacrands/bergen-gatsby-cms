import React from "react"
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import '../styles/main.scss'  

export default ({ data }) => {
  const edges = data.allMarkdownRemark.edges
  console.log(edges)

  return (
    <div className="container">
      <h1>CMS Template</h1>
      <p>A very simple blog CMS built with <a href="https://gatsbyjs.org">Gatsby</a>.</p>
      <p>To add a blog page <a href="/admin/#/">click here</a>.</p>
      <ul class="list">
        {
          edges.map(edge => (
            <li className="list__li">
              <Link className="link link--primary link--img" to={edge.node.fields.slug}>
                <Img fixed={edge.node.frontmatter.image.childImageSharp.fixed}/>
                <div className="link__text">{edge.node.frontmatter.title}</div>
              </Link>              
            </li>
          ))
        }
      </ul>
    </div>
  )
}


export const query = graphql`
{
  allMarkdownRemark {
    edges {
      node {
        id
        fields {
          slug
        }
        frontmatter {
          title
          image {
            childImageSharp {
              fixed(width: 180, height: 135) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
}
`