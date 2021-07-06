// Arquivo global do projeto
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/s_global'
import theme from '../styles/theme'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
export default MyApp
