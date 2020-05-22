import React from 'react'

import styles from './header.module.css'

import crown from '../../images/crown.svg'

const Header = ({children}) => {
  return (
    <div className={ styles.container } >
      <img src={crown} className={ styles.crown } alt='crown' />
      <span className={ styles.textStyle } >{children}</span>
    </div>
  )
}

export default Header