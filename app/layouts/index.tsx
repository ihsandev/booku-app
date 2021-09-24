import Header from "./Header";
import Head from 'next/head'

export default function Layout({children}: any) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#2b46a6" />
        <link rel='manifest' href='/manifest.json' />
      </Head>
      <Header />
        <main>
          {children}
        </main>
    </>
  )
}