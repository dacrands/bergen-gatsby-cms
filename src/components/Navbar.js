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
    name: "STEM Student Scholars",
    slug: "/3sp",
    partiallyActive: false,
  },
]

export default props => (
  <nav className={props.fixed ? "navbar navbar--fixed" : "navbar"}>
    <div className="container">
      <ul className="navbar__list">
        {LINKS.map(link => (
          <li>
            <Link
              activeClassName={"navbar__list-link--active"}
              className="navbar__list-link"
              partiallyActive={link.partiallyActive}
              to={link.slug}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </nav>
)
