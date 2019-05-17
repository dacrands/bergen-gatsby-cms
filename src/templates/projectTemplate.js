import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Navbar from "../components/Navbar"
import ProjectAside from "../components/ProjectsAside"

export default function ProjectTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <Navbar fixed={true} />
      <ProjectAside />
      <div className="post">
        <div className="bg-dark">
          <div className="container container--small post__hero">
            <Img fluid={frontmatter.image.childImageSharp.fluid} />
          </div>
        </div>

        <div className="container container--small">
          <header className="header">
            <h1>{frontmatter.title}</h1>
          </header>
          <div
            className="post__content"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          <div className="project-blogs">            
              {
              frontmatter.blog.map(post => {
               return (
                 <section>
                   <h2>{post.title}</h2>
                   <p>{post.date}</p>
                   <div
                    dangerouslySetInnerHTML={{ __html: post.body }}
                   />
                 </section>
               )
              })
              }            
          </div>
        </div>
      </div>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        abstract
        blog {
          date
          title
          body
        }
        image {
          childImageSharp {
            fluid(maxWidth: 2500, quality: 100) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
      }
      html
    }
  }
`
