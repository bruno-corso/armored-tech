import styled from 'styled-components'
import { cores } from '../../styles'
import icone from '../../assets/images/pata-de-cachorro.png'

const CardDiv = styled.div`
  border: 3px solid ${cores.cinza};
  border-radius: 10px;
  background-color: ${cores.amarelo};
  color: ${cores.cinza};
  padding: 24px;
  font-size: 18px;
  height: 350px;
  width: 25%;
  box-shadow: 1px 1px 4px ${cores.cinza_claro};
  font-weight: bold;
  line-height: 32px;
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    width: 32px;
    margin-bottom: 16px;
  }

  @media (max-width: 1100px) {
    font-size: 15px;
  }

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    margin-bottom: 8px;
  }
`

function CardSobre({ texto }) {
  return (
    <CardDiv>
      <img src={icone} alt="para de cachorro" />
      <p>{texto}</p>
    </CardDiv>
  )
}

export default CardSobre
