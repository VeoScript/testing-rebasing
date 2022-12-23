import Head from 'next/head'
import React, { FC } from 'react'

const About: FC = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>This is about page</title>
      </Head>
      <div>
        <p>This is the about page</p>
        <h1>another modificdation from branch 002</h1>
        <span>I have a bug here</span>
      </div>
    </>
  )
}

export default About
