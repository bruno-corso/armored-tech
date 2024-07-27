import styled from 'styled-components'

import { cores, GlobalCss } from './styles'
import Rotas from './routes'
import { BrowserRouter } from 'react-router-dom'
import Toper from './components/Toper'

const CopyRight = styled.div`
  width: 100%;
  padding: 8px 0;
  /* height: 32px; */
  font-weight: 100;
  background-color: ${cores.cinza};
  color: ${cores.branco};
  text-align: center;
  z-index: 3;

  a {
    color: ${cores.branco};
  }
`

const BackGround = styled.div`
  background-image: radial-gradient(#eeeeee 1px, transparent 1px);
  background-size: 11px 11px;
  background-color: #ffffff;
  z-index: 0;
`

function App() {
  return (
    <BrowserRouter>
      <BackGround>
        <GlobalCss />
        <Toper />
        <Rotas />
        <CopyRight>
          <p>
            Direitos Reservados © 2024{' '}
            <a href="https://github.com/bruno-corso">BTC</a>{' '}
          </p>
        </CopyRight>
      </BackGround>
    </BrowserRouter>
  )
}

export default App
