import React from "react"
import showdown from 'showdown'
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Navbar from "../components/Navbar"
import ProjectAside from "../components/ProjectsAside"

import "../styles/main.scss"

const converter = new showdown.Converter()

export default function ProjectTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
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
          <div>
            <h3>Objective</h3>
            <p>{frontmatter.abstract}</p>
          </div>
          <div>
            <h3>Meeting</h3>
            <p>{frontmatter.meeting}</p>
          </div>
          <div>
            <h3>Students</h3>
            <ul>
              {
                frontmatter.students.map(student => (
                  <li key={student.name}>                    
                    {student.name} &mdash; {` `}                
                  <a href={`mailto:${student.email}`}>{student.email}</a>
                  </li>
                ))
              }
            </ul>
          </div>
          <div>
            <h3>Mentor(s)</h3>
            <ul>
              {
                frontmatter.mentors.map(mentor => (
                  <li key={mentor.name}>                    
                  {mentor.name} &mdash; {` `}                                
                  <a href={`mailto:${mentor.email}`}>{mentor.email}</a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        
          <section className="project-blogs">  
            <div className="container container--small">
              {frontmatter.blog ?  <h2>Blog</h2> : null }
              {                
                frontmatter.blog
                ? frontmatter.blog.map(post => {
                  return (
                    <article 
                      key={post.title}
                      className="card">                      
                      <div className="card__title">
                        <h3>{post.title}</h3>
                        <p><em>{post.date}</em></p>
                        <hr/>
                      </div>
                      <div className="card__img">
                        <Img fixed={post.image.childImageSharp.fixed} />
                      </div>
                      <div className="card__content">
                        <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(post.body)}} />
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
          templateKey
          date
          abstract
          meeting
          mentors {
            email
            name
          }
          students {
            email
            name
        }
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
