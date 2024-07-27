import Banner from '../../components/Banner'
import styled from 'styled-components'
import Sobre from '../../Secoes/Sobre'

const fadeIn = `
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const StyledDiv = styled.div`
  ${fadeIn}
  animation: fadeIn 1.5s ease-out;
`

function Home() {
  return (
    <>
      <StyledDiv>
        <Banner />
        <Sobre />
      </StyledDiv>
    </>
  )
}

export default Home
