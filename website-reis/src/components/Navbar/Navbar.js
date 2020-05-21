import React from 'react'
import { Link } from 'gatsby'

import styles from './navbar.module.css'

import Wrapper from '../../hoc/Wrapper/Wrapper'

const Navbar = () => {
  return (
    <Wrapper paddingVertical= '20px' >
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
    </Wrapper>
  )
}

export default Navbar