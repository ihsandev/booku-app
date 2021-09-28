import type { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import Store from '../context/store'
import Global from '../utils/global'
import theme from '../utils/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Store>
        <Component {...pageProps} />
      </Store>
    </ThemeProvider>
  )
}
export default MyApp
