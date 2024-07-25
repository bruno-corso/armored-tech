import styled from 'styled-components'
import { cores, fontes } from '../../styles'
import FormContato from '../../components/FormContato'

const ContatoBack = styled.div`
  background-image: radial-gradient(${cores.laranja} 1px, transparent 2px);
  background-size: 32px 32px;
  background-color: ${cores.laranja_claro};
  padding: 64px 96px;
  z-index: 0;

  @media (max-width: 900px) {
    padding: 64px 64px;
  }

  @media (max-width: 500px) {
    padding: 64px 32px;
  }
`
const ContatoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`
const TituloContato = styled.h3`
  font-family: ${fontes.destaque};
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${cores.laranja};
  width: 100%;
`
const CardContato = styled.div`
  border: 3px solid ${cores.cinza};
  background-color: ${cores.laranja};
  color: ${cores.cinza};
  padding: 24px;
  font-size: 18px;
  width: 40%;
  height: 25%;
  font-weight: 700;

  @media (max-width: 900px) {
    max-width: 500px;
    width: 100%;
    margin-bottom: 2rem;
  }
`

function Contato() {
  return (
    <>
      <ContatoBack id="contato-id">
        <TituloContato>contato</TituloContato>
        <ContatoDiv>
          <CardContato>
            <p>Daniel Nepomuceno</p>
            <br />
            <br />
            <p>daniel@meuamigopet.com.br</p>
            <br />
            <br />
            <p>+55 (11) 99168-9400 </p>
            <br />
            <br />
          </CardContato>
          <FormContato />
        </ContatoDiv>
      </ContatoBack>
    </>
  )
}

export default Contato
