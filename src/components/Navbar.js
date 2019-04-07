import React from 'react'
import { Link } from 'gatsby'

const LINKS = [
  {
    name: 'about',
    slug: '/about'
  },
  {
    name: 'projects',
    slug: '/projects'
  },
  {
    name: 'resources',
    slug: '/resources'
  },
]

export default () => (
  <nav className="navbar">
    <div className="navbar__logo">
      <Link to="/"><h3>STEM</h3></Link>
    </div>
    <ul className="navbar__list">
      {
        LINKS.map(link => (
          <li>
            <Link className="navbar__list-link" to={link.slug}>{link.name}</Link>
          </li>
        ))
      }
    </ul>

  </nav>
)