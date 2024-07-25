import Banner from './components/Banner'
import Header from './components/Header'
import Contato from './Secoes/Contato'
import Objetivos from './Secoes/Objetivos'
import Sobre from './Secoes/Sobre'
import { GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <Banner />
      <Sobre />
      <Objetivos />
      <Contato />
    </>
  )
}

export default App
