import React from "react"
import { Helmet } from "react-helmet"

import Navbar from "./Navbar"
import Footer from "./Footer"

import "../styles/main.scss"

export default ({ children }) => (
  <div>
    <Helmet>
      <html lang="en" amp />
      <meta charSet="utf-8" />
      <meta name="description" content="Science, Technology, Engineering, Mathematics at Bergen Community College" />
      <title>Bergen STEM</title>      
    </Helmet>
    <Navbar />
    {children}
    <Footer />
  </div>
)
