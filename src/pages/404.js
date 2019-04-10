import React from 'react'
import { globalHistory } from "@reach/router"
import Layout from '../components/Layout'

export default () => {    
  return  (
    <Layout>
      <div className="container">
        <header className="header">
          <h1>
            You Got Lost!
          </h1>
          <p>
            There is no information at <code>{globalHistory.location.pathname}</code>          
          </p>
          {/* <p>
            To fix this error, please shut-down your computer for 75 minutes.
          </p> */}
        </header>
      </div>
    </Layout>
  )
};