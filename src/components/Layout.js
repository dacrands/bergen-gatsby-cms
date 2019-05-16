import React from "react"
import { Helmet } from "react-helmet"

import Navbar from "./Navbar"
import Footer from "./Footer"

import "../styles/main.scss"

export default ({ children }) => (
  <>
    <Helmet>
      <html lang="en" amp />
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Science, Technology, Engineering, Mathematics at Bergen Community College"
      />
      <title>Bergen STEM</title>
    </Helmet>
    <Navbar />
    <main>
      {children}
    </main>
    <Footer />
  </>
)
