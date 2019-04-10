import React from "react"
import Navbar from "./Navbar"

import "../styles/main.scss"

export default ({ children }) => (
  <div>
    <Navbar />
    {children}
  </div>
)