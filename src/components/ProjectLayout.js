import React from "react"

import Navbar from "./Navbar"
import ProjectAside from "./ProjectsAside"

export default ({ children }) => (
  <main>
    <Navbar fixed={true} />
    <ProjectAside />
    <div>{children}</div>
  </main>
)
