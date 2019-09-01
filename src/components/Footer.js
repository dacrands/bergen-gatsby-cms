import React from "react"
import { Link } from "gatsby"

export default () => (
  <footer className="footer footer--three">
    <div className="container">
      <section className="footer__item">
        <h4>Social Media</h4>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/bergen.stem"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/bergen_stem/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
      </section>
      <section className="footer__item">
        <h4>Location</h4>
        <address>
          Room S-315
          <br />
          400 Paramus Road
          <br />
          Paramus, NJ 07652
          <br />
        </address>
      </section>
      <section className="footer__item">
        <h4>Resources</h4>
        <ul>
          <li>
            <a
              href="https://bergen.edu/faculty-staff/grants-administration/awards/stem/running-start-program/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Running Start Program
            </a>
          </li>
          <li>
            <a
              href="https://bergen.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              bergen.edu
            </a>
          </li>
          <li>
            <a
              href="https://bergenstem.com/admin/#/"
              target="_blank"
              rel="noopener noreferrer"
            >
              admin
            </a>
          </li>
        </ul>
      </section>
    </div>
  </footer>
)
