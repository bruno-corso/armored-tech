import styled from 'styled-components'
import { cores, fontes } from '../../styles'
import CardSobre from '../../components/CardSobre'

const ContainerBackground = styled.div`
  background-color: ${cores.laranja_claro};
  padding: 32px 96px;

  @media (max-width: 900px) {
    padding: 32px 32px;
  }

  @media (max-width: 500px) {
    padding: 32px 32px;
  }
`

const ContainerSobre = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: 1024px) {
  }
`

const TituloSobre = styled.h3`
  font-family: ${fontes.destaque};
  font-size: 32px;
  font-weight: 300;
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${cores.laranja};
`

function Sobre() {
  return (
    <ContainerBackground id="sobre-id">
      <TituloSobre>NOSSOS SERVIÇOS</TituloSobre>
      <ContainerSobre>
        <CardSobre
          texto={
            'A gestão de reputação digital envolve monitorar, influenciar e controlar como uma marca, empresa ou indivíduo é percebido online. Isso inclui análise de menções, gerenciamento de avaliações, otimização de conteúdo positivo e mitigação de conteúdo negativo para promover uma imagem forte e favorável na internet.'
          }
        />
        <CardSobre
          texto={
            'Você já enfrentou problemas com processos judiciais na internet que atrapalham sua vida digital? Oferecemos um serviço especializado de remoção de processos judiciais, garantindo uma presença online sem obstáculos legais.'
          }
        />
        <CardSobre
          texto={
            'Oferecemos soluções eficazes para a remoção de conteúdo indesejado na internet. Combinamos expertise em marketing digital e assessoria jurídica para fornecer soluções inovadoras e personalizadas para cada cliente.'
          }
        />
      </ContainerSobre>
    </ContainerBackground>
  )
}

export default Sobre
