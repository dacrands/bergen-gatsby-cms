import React from 'react'
import { Link } from 'gatsby'

const LINKS = [
  {
    name: 'Home',
    slug: '/'
  },
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
  <nav className="navbar container">
    <ul className="navbar__list">
      {
        LINKS.map(link => (
          <li>
            <Link activeStyle={{color: "rgb(98, 66, 228)"}} className="navbar__list-link" to={link.slug}>{link.name}</Link>
          </li>
        ))
      }
    </ul>

  </nav>
)