import styled from 'styled-components'
import { cores } from '../../styles'

const CardDiv = styled.div`
  border: 3px solid ${cores.cinza};
  border-radius: 10px;
  background-color: ${cores.amarelo};
  color: ${cores.cinza};
  padding: 24px;
  font-size: 18px;
  height: 400px;
  width: 25%;
  box-shadow: 1px 1px 4px ${cores.cinza_claro};
  font-weight: bold;
`

function CardSobre() {
  return (
    <CardDiv>
      lorem ipsum dolor sit amet consectetur adipisicing elit. a suscipit vel
      assumenda praesentium laborum rem sequi velit tenetur sapiente illum?
      <br />
      <br />
      lorem ipsum dolor sit amet consectetur adipisicing elit.
    </CardDiv>
  )
}

export default CardSobre
