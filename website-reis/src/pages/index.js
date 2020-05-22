import React from "react"
import { Link } from 'gatsby'

import Layout from '../hoc/Layout'
import Wrapper from '../hoc/Wrapper/Wrapper'

import CardLink from '../components/CardLink/CardLink'
import CodeBlock from '../components/CodeBlock/CodeBlock'
import LinkIcon from '../components/LinkIcon/LinkIcon'
import Marker from '../components/Timeline/Marker/Marker'
import Timeline from '../components/Timeline/Timeline'
import Title from '../components/Title/Title'

import handIcon from '../images/hand-pointing-right.svg'
import portfolioIcon from '../images/website-outline.svg'

const IndexPage = () => (
  <Layout>
    <Wrapper>
      <Title
        header="About me"
        text={
          <p>Thanks to Toby I have a very strong prejudice against Human Resources. I believe that the department is a breeding ground for monsters. What I failed to consider though, is that not all monsters are bad. Like ET. Is Holly our extra-terrestrial? Maybe. Or maybe she's just an awesome woman from this planet.
          <br />
          <br />
          If you want to see my CV you can find it <Link to={'/curriculum-vitae'}>here</Link>.</p>
        }
      />
    </Wrapper>
    <Wrapper>
      <Timeline
        events = {[
          {
            year: '1996',
            text: 'This is a test'
          },
          {
            year: '1997',
            text: 'This is a test'
          },
          {
            year: '1998',
            text: 'This is a test'
          },
          {
            year: '1999',
            text: 'This is a test'
          },
          {
            year: '2000',
            text: 'This is a test'
          },
        ]}
      />
    </Wrapper>
    <Wrapper>
      <CardLink cardIcon={ handIcon } />
    </Wrapper>
    <Wrapper display = 'grid'  gridTemplateColumns = 'auto auto' gridGap = '3rem'>
      <CardLink />
      <CardLink />
      <CardLink />
      <CardLink />
      <CardLink />
    </Wrapper>
    <Wrapper>
      <CodeBlock
          textArray={[
            `if() {`,
            `  console.log('não tem condição bicho');`,
            `} else {`,
            `  console.log('code blocks can be used like this');`,
            `}`
          ]}
        />
    </Wrapper>
    <Wrapper>
      <LinkIcon iconLink={ portfolioIcon } >Check out my portfolio</LinkIcon>
    </Wrapper>
  </Layout>
)

export default IndexPage
