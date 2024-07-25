import styled from 'styled-components'
import { cores, fontes } from '../../styles'
import CardSobre from '../../components/CardSobre'

const ContainerBackground = styled.div`
  background-color: ${cores.laranja_claro};
  padding: 64px 96px;

  @media (max-width: 900px) {
    padding: 64px 64px;
  }

  @media (max-width: 500px) {
    padding: 64px 32px;
  }
`

const ContainerSobre = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

const TituloSobre = styled.h3`
  font-family: ${fontes.destaque};
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${cores.laranja};
`

function Sobre() {
  return (
    <ContainerBackground>
      <TituloSobre>sobre</TituloSobre>
      <ContainerSobre>
        <CardSobre />
        <CardSobre />
        <CardSobre />
      </ContainerSobre>
    </ContainerBackground>
  )
}

export default Sobre
