import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

import "../styles/main.scss"

export default ({ children }) => (
  <div>
    <Navbar />
    {children}
    <Footer />
  </div>
)