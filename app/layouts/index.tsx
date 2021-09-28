import Header from "./Header";
import Head from 'next/head'
import React from "react";
import Content from "./Content";
import TabBottom from "./TabBottom";

interface ILayout {
  title?: string;
  children?: JSX.Element;
}

const Layout : React.FC<ILayout> = ({title, children}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="theme-color" content="#2b46a6" />
        <link rel='manifest' href='/manifest.json' />
      </Head>
      <Header />
        <Content>
          {children}
        </Content>
      <TabBottom />
    </>
  )
}

export default Layout