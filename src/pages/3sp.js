import React from "react"

import Layout from "../components/Layout"

const CONTENT = [
  {
    h2: "Information",
    items: [
      {
        isList: false,
        h3: "Benefits",
        para: [
          "Students who successfully participate in the program shall have an opportunity in their second summer in the program to participate in an internship off campus in their target 4-year college or industry.",
        ],
      },
      {
        isList: false,
        h3: "Purpose",
        para: [
          "The STEM Student Scholars Program shall promote excellence in knowledge, skills and ability of a select group of STEM students to ensure their success in securing research internships and successful transfer to their targeted 4-year institution.",
        ],
      },
    ],
  },
  {
    h2: "Requirements",
    items: [
      {
        isList: true,
        h3: "Eligibility Requirements",
        para: [
          "STEM degree seeking",
          "Minimum 3.75 Cumulative GPA",
          "Finished 12 college level credits with no additional remediation required",
        ],
      },
      {
        isList: true,
        h3: "Admission Requirements",
        para: [
          "Attended one information session",
          "Completed and submitted a 3SP application",
          "Joined a 3SP Faculty Research Mentor’s project team for Summer I or Summer II internship",
        ],
      },
      {
        isList: true,
        h3: "Ongoing Requirements to remain in good standing",
        para: [
          "Maintaining minimum 3.75 Cumulative GPA",
          "Contributing member of the STEM Student Union club",
          "Punctual and responsive to official 3SP communications",
          "Working to complete 3SP Academic, Research and Service Requirements",
          "Successfully completed an on campus 3SP Summer I or Summer II internship",
        ],
      },
    ],
  },
]

export default () => (
  <Layout>
    <div style={{ paddingBottom: "80px" }} className="container">
      <header className="header">
        <h1>STEM Student Scholars</h1>
      </header>

      {CONTENT.map(section => (
        <section key={section.h2} className="section">
          <h2>{section.h2}</h2>
          <div className="grid-two">
            {section.items.map(item => {
              if (!item.isList) {
                return (
                  <div
                    key={item.h3.replace(/\s/g, "")}
                    className="section__content"
                  >
                    <h3>{item.h3}</h3>
                    {item.para.map((p, index) => (
                      <p key={index}>{p}</p>
                    ))}
                  </div>
                )
              }
              return (
                <div
                  key={item.h3.replace(/\s/g, "")}
                  className="section__content"
                >
                  <h3>{item.h3}</h3>
                  <ul>
                    {item.para.map((p, index) => (
                      <li key={index}>{p}</li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  </Layout>
)
