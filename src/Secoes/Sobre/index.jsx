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

  @media (max-width: 1024px) {
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
    <ContainerBackground id="sobre-id">
      <TituloSobre>sobre</TituloSobre>
      <ContainerSobre>
        <CardSobre
          texto={
            'com anos de experiência no mercado pet, a meuamigopet se destaca pela qualidade e confiança que proporciona aos seus franqueados e clientes.'
          }
        />
        <CardSobre
          texto={
            'nosso compromisso é promover a saúde e o bem-estar dos pets, oferecendo uma experiência de compra agradável e produtos de alta qualidade.'
          }
        />
        <CardSobre
          texto={
            'na meuamigopet, acreditamos que cada pet merece ser tratado com carinho e respeito, por isso trabalhamos incansavelmente para garantir a satisfação de nossos clientes.'
          }
        />
      </ContainerSobre>
    </ContainerBackground>
  )
}

export default Sobre
