import React from "react"
import Img from "gatsby-image"

import Layout from "../components/Layout"

const rawContentObj = {
  content1: {
    isList: false,
    title: "Benefits",
    body: [
      "Students who successfully participate in the program shall have an opportunity in their second summer in the program to participate in an internship off campus in their target 4-year college or industry.",
    ],
  },
  content2: {
    isList: false,
    title: "Purpose",
    body: [
      "The STEM Student Scholars Program shall promote excellence in knowledge, skills and ability of a select group of STEM students to ensure their success in securing research internships and successful transfer to their targeted 4-year institution.",
    ],
  },
  content3: {
    isList: true,
    title: "Eligibility",
    body: [
      "STEM degree seeking",
      "Minimum 3.75 Cumulative GPA",
      "Finished 12 college level credits with no additional remediation required",
    ],
  },
  content4: {
    isList: true,
    title: "Admission",
    body: [
      "Attended one information session",
      "Completed and submitted a 3SP application",
      "Joined a 3SP Faculty Research Mentor’s project team for Summer I or Summer II internship",
    ],
  },
  content5: {
    isList: true,
    title: "Ongoing Requirements to remain in good standing",
    body: [
      "Maintaining minimum 3.75 Cumulative GPA",
      "Contributing member of the STEM Student Union club",
      "Punctual and responsive to official 3SP communications",
      "Working to complete 3SP Academic, Research and Service Requirements",
      "Successfully completed an on campus 3SP Summer I or Summer II internship",
    ],
  },
}

export default ({ data }) => (
  <Layout>
    <div style={{ paddingBottom: "80px" }} className="container">
      <header className="header">
        <h1>STEM Student Scholars</h1>
      </header>
      <section className="section section--med row">
        <Media
          alt="Group photo of stem scholars"
          media={data.image1.childImageSharp.fluid}
        />
        <Info content={rawContentObj.content1} />
      </section>
      <section className="section section--med row">
        <Info content={rawContentObj.content2} />
        <Media
          alt="Aerial drone created by stem scholars"
          media={data.image2.childImageSharp.fluid}
        />
      </section>
      <section className="section">
        <h2>Requirements</h2>
        <Info content={rawContentObj.content3} />
        <Info content={rawContentObj.content4} />
        <Info content={rawContentObj.content5} />
      </section>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    image1: file(relativePath: { regex: "/groundstation/" }) {
      id
      childImageSharp {
        id
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { regex: "/landing-2/" }) {
      id
      childImageSharp {
        id
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Info = props => {
  if (!props.content.isList) {
    return (
      <div
        key={props.content.title.replace(/\s/g, "")}
        className="section__content col"
      >
        <h3>{props.content.title}</h3>
        {props.content.body.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
      </div>
    )
  }
  return (
    <div
      key={props.content.title.replace(/\s/g, "")}
      className="section__content"
    >
      <h3>{props.content.title}</h3>
      <ul>
        {props.content.body.map((p, index) => (
          <li key={index}>{p}</li>
        ))}
      </ul>
    </div>
  )
}

const Media = props => (
  <div className="section__media col">
    <Img fluid={props.media} alt={props.alt} />
  </div>
)
