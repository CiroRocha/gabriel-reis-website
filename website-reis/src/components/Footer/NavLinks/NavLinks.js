import React from 'react'
import { Link } from 'gatsby'
import t from 'prop-types'

import styles from './navLinks.module.css'

const NavLinks = ({ title, links, customReferrerPolicy }) => {

  return (
    <div className={ styles.container } >
      <h1 className={ styles.title } >{title}</h1>

      <div className={ styles.linksContainer }>
        {links.map((link, index) => {
          if(link.external) {
            return <a href={ link.destination } className={ styles.text } referrerPolicy={ customReferrerPolicy } key={index} target='_blank' >{link.text}</a>
          } else {
            return <Link to={ link.destination } className={ styles.text } key={index} >{link.text}</Link>
          }
        })}
      </div>

    </div>
  )
}

NavLinks.propTypes = {
  title: t.string,
  links: t.arrayOf(t.object),
  customReferrerPolicy: t.string,
}

NavLinks.defaultProps = {
  title: 'Lorem Ipsum',
  links: [{destination: '/', text: 'Lorem Ipsum'}],
  customReferrerPolicy: 'no-referrer',
}

export default NavLinks