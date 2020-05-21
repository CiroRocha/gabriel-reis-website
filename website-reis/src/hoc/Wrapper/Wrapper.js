import React from 'react'
import t from 'prop-types'

import styles from './wrapper.module.css'

const Wrapper = ({ children, bgColor, paddingVertical, paddingHorizontal, ...rest }) => {

  const wrapperStyling= {
    backgroundColor: `var(--${bgColor})`,
    padding: `${paddingVertical} ${paddingHorizontal}`,
    display: 'flex',
  }

  return (
    <div style={ wrapperStyling } {...rest} >
      <div className={ styles.wrapper } >
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
  paddingHorizontal: '4rem',
}

export default Wrapper