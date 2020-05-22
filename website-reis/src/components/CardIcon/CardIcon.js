import React from 'react'

import styles from './cardIcon.module.css'

import handImg from '../../images/hand-pointing-right.svg'

const CardIcon = ({ children }) => {
  return(
    <div className={ styles.container }>
      <img src={ handImg } alt='pointing-hand' />
      <h1>{children}</h1>
    </div>
  )
}

export default CardIcon