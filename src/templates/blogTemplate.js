
import React from 'react';
import { graphql } from 'gatsby'
import Img from 'gatsby-image'


export default function BlogTemplate({
  data,
}) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <div style={{maxWidth: `500px`, margin: `0 auto`, padding: `0 1em`}}>
      <div className="blog-post">
        <Img fluid={frontmatter.image.childImageSharp.fluid}/>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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