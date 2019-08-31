import React from "react"
import showdown from 'showdown'
import { graphql } from "gatsby"
import Img from "gatsby-image"


import "../styles/main.scss"
import ProjectLayout from "../components/ProjectLayout"
import Video from "../components/Video"

const converter = new showdown.Converter()

export default function ProjectTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  return (
    <ProjectLayout>      
      <div className="post">
        <div className="container container--small">
          <header className="header">
            <h1>{frontmatter.title}</h1>            
          {
            frontmatter.video 
            ? <Video style={{ marginBottom: 0 }} embed={frontmatter.video}/>
            :<div className="post__hero">
              <Img fluid={frontmatter.image.childImageSharp.fluid} loading="eager" />
            </div>            
          }          
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
                  <a href={`mailto:${student.email}`}>{student.email.replace("@", " (at) ")}</a>
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
                  <a href={`mailto:${mentor.email}`}>{mentor.email.replace("@", " (at) ")}</a>
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
                        {
                          post.image 
                          ? <div className="card__img">
                             <Img fixed={post.image.childImageSharp.fixed} />
                            </div>
                          : null
                        }                        
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
    </ProjectLayout>
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
          video
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
    }
  }
`
