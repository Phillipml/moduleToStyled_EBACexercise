import { ThemeProvider } from 'styled-components'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import { Theme } from './theme/theme'
import { Container, GlobalStyle } from './styles'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />

      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
