import React from 'react'

import styles from './codeBlock.module.css'

const CodeBlock = ({ textArray }) => {
  return (
    <div className={ styles.container } >
      {textArray.map((line, index) => {
        return <span key={ index }>{ line.replace(/ /g, "\u00a0") }<br /></span>
      })}
    </div>
  )
}

export default CodeBlock