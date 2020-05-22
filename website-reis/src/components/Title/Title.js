import React from 'react'

import styles from './title.module.css'

import Wrapper from '../../hoc/Wrapper/Wrapper'
import Header from './Header/Header'

const Title = ({ header, text }) => {
  return (
    <Wrapper display='flex' flexDirection='column' alignItems='center' textAlign='center' paddingHorizontal='0'>
      <Header>{ header }</Header>
      <span className={ styles.text }>
        { text }
      </span>
    </Wrapper>
  )
}

export default Title