import React from 'react'

import styles from './marker.module.css'

import markerImg from '../../../images/timeline-marker.svg'

const Marker = ({ year, text }) => {
  return(
    <div className={ styles.container } >
      <p>{ year }</p>
      <img src={ markerImg } alt='marker' />
      <p>{ text }</p>
    </div>
  )
}

export default Marker