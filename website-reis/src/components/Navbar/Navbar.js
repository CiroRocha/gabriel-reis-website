import React from 'react'
import { Link } from 'gatsby'

import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <div className={ styles.container } >
      <Link to='/' className={ styles.mainLink } >
        Gabriel Reis
      </Link>
      <div className={ styles.linkContainer } >
        <Link to='/about' className={ styles.link } >
          About
        </Link>
        <Link to='/portfolio' className={ styles.link } >
          Portfolio
        </Link>
        <Link to='/blog' className={ styles.link } >
          Blog
        </Link>
        <Link to='/contact' className={ styles.contact } >
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Navbar