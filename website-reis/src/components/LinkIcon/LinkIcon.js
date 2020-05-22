import React from 'react'
import { Link } from 'gatsby'
import t from 'prop-types'

import styles from './linkIcon.module.css'
import arrow from '../../images/arrow-right.svg'

const LinkIcon = ({ iconLink, external, destination, customReferrerPolicy, children }) => {
  return (
    <div className={ styles.container } >
      {iconLink ? <img src={iconLink} alt='link icon' /> : null}
      {external
      ? <a href={ destination } target='_blank' referrerPolicy={ customReferrerPolicy } className={ styles.linkText } >
          {children}
          <img src={ arrow } className={ styles.arrow } alt='Arrow Icon' />
      </a>
      : <Link to={destination} className={ styles.linkText } >
          { children }
          <img src={ arrow } className={ styles.arrow } alt='Arrow Icon' />
        </Link>}
    </div>
  )
}

LinkIcon.propTypes = {
  iconLink: t.oneOf(t.object, t.string),
  external: t.bool,
  destination: t.string,
  customReferrerPolicy: t.string,
}

LinkIcon.defaultProps = {
  iconLink: null,
  external: false,
  destination: '/',
  customReferrerPolicy: 'no-referrer',
}

export default LinkIcon