import React from 'react'

import styles from './footer.module.css'

import desertImage from '../../images/desert.svg'
import NavLinks from './NavLinks/NavLinks'
import Wrapper from '../../hoc/Wrapper/Wrapper'

const Footer = () => {
  return (
    <Wrapper bgColor='dark-gray' paddingVertical='80px'>
      <div className={styles.footerContainer} >
        <img src={desertImage} className={ styles.image } />
        <NavLinks
          title='Sitemap'
          links={[
            {
              destination: '/about',
              text: 'About Me'
            },
            {
              destination: '/blog',
              text: 'Blog'
            },
            {
              destination: '/portfolio',
              text: 'Portfolio'
            },
            {
              destination: '/curriculum-vitae',
              text: 'Curriculum Vitae'
            },
            {
              destination: '/contact',
              text: 'Contact'
            },
          ]}
        />
        <NavLinks
          title='Social Media'
          links={[
            {
              external: true,
              destination: 'https://www.google.com',
              text: 'GitHub'
            },
            {
              external: true,
              destination: 'https://www.google.com',
              text: 'Linkedin'
            },
            {
              external: true,
              destination: 'https://www.google.com',
              text: 'Instagram'
            },
            {
              external: true,
              destination: 'https://www.google.com',
              text: 'Facebook'
            },
            {
              external: true,
              destination: 'https://www.google.com',
              text: 'Twitter'
            },
          ]}
        />
      </div>
    </Wrapper>
  )
}

export default Footer