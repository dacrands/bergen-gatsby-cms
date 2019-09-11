import React from "react"

import Layout from "../components/Layout"

const CONTENT = [
  {
    h3: "Real World Research Experience",
    p:
    "Thanks to the STEMatics grant, Bergen Community College is equipped with top of the line research equipment and facilities. This enables students to build skills in current technologies being used in modern industry.",
    key: "research",
  },
  {
    h3: "Hands-on Faculty",
    p:
      "At Bergen Community College, our STEM faculty understand the value of proper research experience in a student's academic career. Our program provides students the guidance and support they need to ask the scientific questions that interest them most.",
    key: "faculty",
  },
  {
    h3: "Resources",
    p:
      "Majoring in STEM is a difficult task, so be sure to utilize our free prep classes and award-winning tutoring services to get the support you need.",
      key: "resources",
  },
  
]

export default () => (
  <Layout>
    <div className="container" style={{ paddingBottom: "10vh" }}>

      <header className="header">
        <h1>STEM at BCC</h1>
        <p />
      </header>

      <section className="section">
        <h2>Program Information</h2>
        <div className="grid-two">
          {CONTENT.map(text => (
            <div key={text.key} className="section__content">
              <h3>{text.h3}</h3>
              <p className="">{text.p}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>STEM Majors</h2>
        <div className="flex--wrap">
          <ul className="section__list flex__item--50">
            {[
              "Horticulture",
              "Landscape/Design/Build",
              "Environmental Technology",
              "Manufacturing Technology",
              "Networking Administration",
              "Office Technology",
              "Web Development & Management",
            ].map(major => (
              <li key={major}>{major}</li>
            ))}
          </ul>
          <ul className="section__list flex__item--50">
            {[
              "Medical Informatics",
              "Game Programming",
              "Game Testing",
              "Science Lab Technology",
              "Management Information Systems",
              "Information Technology",
              "Technical Studies",
            ].map(major => (
              <li key={major}>{major}</li>
            ))}
          </ul>
          <ul className="section__list flex__item--50">
            {[
              "Pre-Chiropractic",
              "Engineering Science",
              "General Engineering",
              "Technology",
              "Drafiting & Design",
              "Database Programming",
              "Electronics Technology",
              "General Natural Science",
            ].map(major => (
              <li key={major}>{major}</li>
            ))}
          </ul>
          <ul className="section__list flex__item--50">
            {[
              "Aviation Administration",
              "Biology",
              "Biotechnology",
              "Chemistry",
              "Computer Science",
              "Information Technology",
              "Mathematics",
              "Physics",
            ].map(major => (
              <li key={major}>{major}</li>
            ))}
          </ul>
        </div>
      </section>

    </div>
  </Layout>
)
