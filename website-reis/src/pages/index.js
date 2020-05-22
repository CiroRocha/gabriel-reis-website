import React from "react"

import Layout from '../hoc/Layout'
import Wrapper from '../hoc/Wrapper/Wrapper'

import CardIcon from '../components/CardIcon/CardIcon'
import CodeBlock from '../components/CodeBlock/CodeBlock'
import Header from '../components/Header/Header'
import LinkIcon from '../components/LinkIcon/LinkIcon'

const IndexPage = () => (
  <Layout>
    <Wrapper>
      <Header>About me</Header>
      <CardIcon>I mean, this is a long card, so if you want a longer title you can do it, this still works with two lines.</CardIcon>
      <LinkIcon destination="/about">Go to page About</LinkIcon>
      <CodeBlock
          textArray={[`if() {`, `  console.log('não tem condição bicho');`, `} else {`, `  console.log('code blocks can be used like this');`, `}`]} />
    </Wrapper>
  </Layout>
)

export default IndexPage
