import styled from 'styled-components'
import { cores } from '../../styles'
import { TbShieldSearch } from 'react-icons/tb'

const CardDiv = styled.div`
  border-bottom: 4px solid ${cores.destaque_neutro};
  border-right: 4px solid ${cores.destaque_neutro};
  border-top: 1px solid ${cores.destaque_neutro};
  border-left: 1px solid ${cores.destaque_neutro};
  background-color: ${cores.amarelo};
  color: ${cores.cinza};
  padding: 24px;
  font-size: 18px;
  width: 25%;
  font-weight: 300;
  line-height: 32px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2rem;
  gap: 1rem;

  img {
    width: 32px;
    margin-bottom: 16px;
  }

  @media (max-width: 1100px) {
    font-size: 15px;
  }

  @media (max-width: 1024px) {
    height: auto;
    margin-bottom: 1.5rem;
  }
`

function CardSobre({ texto }) {
  return (
    <CardDiv>
      <TbShieldSearch size={30} />
      <p>{texto}</p>
    </CardDiv>
  )
}

export default CardSobre
