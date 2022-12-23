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
      </div>
    </>
  )
}

export default About
