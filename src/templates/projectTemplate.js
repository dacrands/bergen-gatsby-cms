
import React from 'react';
import { graphql } from 'gatsby'
import Img from 'gatsby-image'


export default function ProjectTemplate({
  data,
}) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="container">
      <div className="blog-post">
        <Img fluid={frontmatter.image.childImageSharp.fluid}/>
        <h1>{frontmatter.title}</h1>
        
        
      </div>
    </div>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        image{
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