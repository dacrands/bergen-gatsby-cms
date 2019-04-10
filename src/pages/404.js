import React from 'react'
import Layout from '../components/Layout'

export default () => (
  <Layout>
    <div className="container">
      <header className="header">
        <h1>
          You Got Lost!
        </h1>
        <p>
          There is no information at <code>{document.location.pathname.replace(/^\/([^\/]*).*$/, '$1')}</code>          
        </p>
        {/* <p>
          To fix this error, please shut-down your computer for 75 minutes.
        </p> */}
      </header>
    </div>
  </Layout>
)