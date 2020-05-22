import React, { useState } from 'react'

import styles from './timeline.module.css'

import arrow from '../../images/chevron.svg'
import Marker from './Marker/Marker'

const Timeline = ({ events }) => {
  const [disableLeft, setDisableLeft] = useState(false)
  const [disableRight, setDisableRight] = useState(true)

  const allEvents = events.map((event, index) => {
      return (
        <>
          <div className={ styles.emptyMarker } >
            <div />
          </div>
          <Marker year={ event.year } text={ event.text } key={ index } />
        </>
      )
  })

  return (
    <div className={ styles.container } >
      <button className={ styles.arrow } disabled={ disableLeft } >
        <img src={arrow} alt='arrow icon' />
      </button>
      <div className={ styles.markersContainer } >
        { allEvents }
      </div>
      <button className={ styles.arrow } disabled={ disableRight } >
        <img src={arrow} style={{ transform: 'rotate(180deg)' }} alt='arrow icon' />
      </button>
    </div>
  )
}

export default Timeline