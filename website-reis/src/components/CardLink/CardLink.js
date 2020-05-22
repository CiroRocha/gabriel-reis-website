import React from 'react'
import t, { oneOfType } from 'prop-types'

import styles from './cardLink.module.css'

import LinkIcon from '../LinkIcon/LinkIcon'

const CardLink = ({ cardIcon, cardTitle, cardText, linkDestination, linkText }) => {
  return (
    <div className={ styles.container } >
      { cardIcon ? <img src={cardIcon} className={ styles.iconImg } /> : null }
      <div className={ styles.textContainer }>
        <h2>{ cardTitle }</h2>
        <p>
          { cardText }
        </p>
        <LinkIcon destination={ linkDestination } >{ linkText }</LinkIcon>
      </div>
    </div>
  )
}

CardLink.propTypes = {
  cardIcon: oneOfType([t.string, t.object]),
  cardTitle: t.string,
  cardText: oneOfType([t.string, t.object]),
  linkDestination: t.string,
  linkText: oneOfType([t.string, t.object]),
}

CardLink.defaultProps = {
  cardIcon: null,
  cardTitle: 'This is a card',
  cardText: "Oscar visited Mexico when he was five to attend his great-grandmothers funeral. What does that mean to the United States law enforcement officer? He's a potential drug mule.",
  linkDestination: '/',
  linkText: 'Check it out',
}

export default CardLink