import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Navbar from "../components/Navbar"
import ProjectAside from "../components/ProjectsAside"

import "../styles/main.scss"

export default function ProjectTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <main>
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
          <article
            className="post__content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
          <section className="project-blogs">  
            <div className="container container--small">
              {frontmatter.blog ?  <h2>Blog</h2> : null }
              {                
                frontmatter.blog
                ? frontmatter.blog.map(post => {
                  return (
                    <article className="card">                      
                      <div className="card__title">
                        <p><em>{post.date}</em></p>
                        <h3>{post.title}</h3>
                        <hr/>
                      </div>
                      <div className="card__img">
                        <Img fixed={post.image.childImageSharp.fixed} />
                      </div>
                      <div className="card__content">
                        <p>{post.body}</p>
                      </div>
                    </article>
                  )
                  })
                : null
              }            
            </div>          
          </section>        
      </div>
    </main>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        abstract
        blog {
          date(formatString: "MMMM, DD YYYY")
          title
          body
          image {
            id
            childImageSharp {
              fixed(width:400){
              ...GatsbyImageSharpFixed
              }
            }
          }
        }
        image {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
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
