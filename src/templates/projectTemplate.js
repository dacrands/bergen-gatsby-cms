import React from 'react';
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'


export default function ProjectTemplate({
  data,
}) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
    <div>
      <div className="blog-post">
        <div className="bg-dark">
          <div className="container container--small"> 
            <Img fluid={frontmatter.image.childImageSharp.fluid}/>
          </div>          
        </div>        
        <div className="container container--small">
          <header className="header">
            <h1>{frontmatter.title}</h1>
          </header>          
          <p>{frontmatter.abstract}</p>        
        </div>        
      </div>
    </div>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        abstract
        image {
          childImageSharp {
            fluid(maxWidth: 2500, quality: 100) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
      }
    }
  }
`