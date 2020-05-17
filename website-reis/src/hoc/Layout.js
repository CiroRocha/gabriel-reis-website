import React from 'react'

import styles from './Layout.css'

import Wrapper from './Wrapper/Wrapper'
import Navbar from '../components/Navbar/Navbar'
import SEO from '../components/seo'
import Footer from '../components/Footer/Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Wrapper>
        <SEO title="Home" />
        <Navbar />
        <content>
          {children}
        </content>
      </Wrapper>
      <Footer />
    </>
  )
}

export default Layout