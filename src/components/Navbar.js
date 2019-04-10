import React from "react"
import { Link } from "gatsby"

const LINKS = [
  {
    name: "Home",
    slug: "/",
    partiallyActive: false,
  },
  {
    name: "about",
    slug: "/about",
    partiallyActive: false,
  },
  {
    name: "projects",
    slug: "/projects",
    partiallyActive: true,
  },
  {
    name: "resources",
    slug: "/resources",
    partiallyActive: false,
  },
]

export default () => (
  <nav className="navbar container">
    <ul className="navbar__list">
      {LINKS.map(link => (
        <li>
          <Link
            activeStyle={{ color: "rgb(98, 66, 228)" }}
            className="navbar__list-link"
            partiallyActive={link.partiallyActive}
            to={link.slug}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)
