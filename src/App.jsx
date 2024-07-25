import styled from 'styled-components'

import { cores, GlobalCss } from './styles'
import Rotas from './routes'
import { BrowserRouter } from 'react-router-dom'

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
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
      <CopyRight>
        <p>
          Direitos Reservados © 2024{' '}
          <a href="https://github.com/bruno-corso">BTC</a>{' '}
        </p>
      </CopyRight>
    </BrowserRouter>
  )
}

export default App
