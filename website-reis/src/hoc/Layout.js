import React from 'react'

import styles from './Layout.css'

import Navbar from '../components/Navbar/Navbar'
import SEO from '../components/seo'
import Footer from '../components/Footer/Footer'

const Layout = ({ children }) => {
  return (
    <>
      <SEO title="Home" />
      <Navbar />
      <content>
        {children}
      </content>
      <Footer />
    </>
  )
}

export default Layout