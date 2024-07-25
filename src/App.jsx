import styled from 'styled-components'

import Banner from './components/Banner'
import Header from './components/Header'
import Contato from './Secoes/Contato'
import Objetivos from './Secoes/Objetivos'
import Sobre from './Secoes/Sobre'
import { cores, GlobalCss } from './styles'

const CopyRight = styled.div`
  width: 100%;
  padding: 8px 0;
  /* height: 32px; */
  font-weight: 100;
  background-color: ${cores.cinza};
  color: ${cores.branco};
  text-align: center;

  a {
    color: ${cores.branco};
  }
`

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <Banner />
      <Sobre />
      <Objetivos />
      <Contato />
      <CopyRight>
        <p>
          Direitos Reservados © 2024{' '}
          <a href="https://github.com/bruno-corso">BTC</a>{' '}
        </p>
      </CopyRight>
    </>
  )
}

export default App
