import React from 'react'
import t from 'prop-types'

import styles from './wrapper.module.css'

const Wrapper = ({ children, bgColor, paddingVertical, paddingHorizontal, ...rest }) => {

  const wrapperStyling= {
    backgroundColor: `var(--${bgColor})`,
    padding: `${paddingVertical} ${paddingHorizontal}`,
  }

  return (
    <div style={ wrapperStyling } >
      <div className={ styles.wrapper } style={{ ...rest }} >
        {children}
      </div>
    </div>
  )
}

Wrapper.propTypes = {
  children: t.object,
  bgColor: t.string,
  padding: t.string
}

Wrapper.defaultProps = {
  bgColor: 'white',
  paddingVertical: '150px',
  paddingHorizontal: '10rem',
}

export default Wrapper