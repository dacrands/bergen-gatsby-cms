import React from "react"

import Layout from "../components/Layout"

const content = [
  {
    h3: "Hands-on Faculty",
    p:
      "Thanks to the STEMatics grant, Bergen Community College is equipped with top of the line research equipment and facilities. This enables students to build skills in current technologies being used in modern industry.",
  },
  {
    h3: "Real World Research Experience",
    p:
      "At Bergen Community College, our STEM faculty understand the value of proper research experience in a student's academic career. Our program provides students the guidance and support they need to ask the scientific questions that interest them most.",
  },
  {
    h3: "Resources",
    p:
      "Majoring in STEM is a difficult task, so be sure to utilize our free prep classes and award-winning tutoring services to get the support you need.",
  },
]

export default () => (
  <Layout>
    <div className="container">
      <header className="header">
        <h1>STEM at BCC</h1>
        <p />
      </header>
      <main style={{ paddingBottom: "20vh" }} className="flex--wrap">
        {content.map(text => (
          <section className="">
            <div className="section__content">
              <h3>{text.h3}</h3>
              <p className="">{text.p}</p>
            </div>
          </section>
        ))}
      </main>
    </div>
  </Layout>
)
