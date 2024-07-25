import styled from 'styled-components'
import { cores, fontes } from '../../styles'
import gato_cachorro from '../../assets/images/gato_cachorro.png'

const ContainerBackground = styled.div`
  background-color: ${cores.laranja_pastel};
  padding: 64px 96px;
`

const ContainerObjetivos = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 50%;
`

const TituloObjetivos = styled.h3`
  font-family: ${fontes.destaque};
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${cores.laranja};
`

const TopicoObjetivo = styled.div`
  border: 3px solid ${cores.cinza};
  font-size: 18px;
  height: 100px;
  border-radius: 10px;
  background-color: ${cores.amarelo};
  margin-bottom: 1rem;
  padding-left: 2rem;
  display: flex;
  align-items: center;
  font-weight: 900;
  box-shadow: 1px 1px 4px ${cores.cinza_claro};
`

const ImagemObjetivo = styled.img`
  display: inline;
  border-radius: 10px;
  height: 350px;
  box-shadow: 2px 2px 5px ${cores.laranja};
`

function Objetivos() {
  return (
    <ContainerBackground>
      <TituloObjetivos>objetivos</TituloObjetivos>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <ContainerObjetivos>
          <TopicoObjetivo>
            <p>objetivo ###</p>
          </TopicoObjetivo>
          <TopicoObjetivo>
            <p>objetivo ###</p>
          </TopicoObjetivo>
          <TopicoObjetivo>
            <p>objetivo ###</p>
          </TopicoObjetivo>
        </ContainerObjetivos>
        <ImagemObjetivo src={gato_cachorro} alt="gato e cacgorro" />
      </div>
    </ContainerBackground>
  )
}

export default Objetivos
