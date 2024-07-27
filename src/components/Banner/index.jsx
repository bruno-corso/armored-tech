import styled from 'styled-components'
import { cores } from '../../styles'
import logo from '../../assets/images/logo_armored_tech.png'
import foto from '../../assets/images/robo_investigando.jpg'

const BannerBackground = styled.div`
  background-image: repeating-radial-gradient(
      circle at 0 0,
      ${cores.laranja} 0,
      ${cores.amarelo} 6px
    ),
    repeating-linear-gradient(#ffa80055, ${cores.laranja});
  background-position: 0 0;
  z-index: 0;
  /* height: 90vh; */
`

const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 100px 40px;
  gap: 2rem;

  @media (max-width: 500px) {
    justify-content: start;
    flex-direction: column;
  }
`

const LogoBanner = styled.img`
  width: 40%;
  z-index: 1;
  max-width: 400px;

  @media (max-width: 500px) {
    width: 90%;
    /* margin-top: 2rem; */
  }
`

const FraseBanner = styled.h3`
  width: 50%;
  font-size: 42px;
  line-height: 63px;
  font-weight: 300;
  color: ${cores.cinza};
  text-transform: uppercase;

  @media (max-width: 500px) {
    width: 100%;
    font-size: 32px;
    line-height: 48px;
    text-align: center;
  }
`
const FotoBanner = styled.img`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
`

function Banner() {
  return (
    <BannerBackground>
      <BannerContainer>
        <LogoBanner src={logo} alt="logo armored tech" />
        <FraseBanner>Defesa total da sua reputação digital.</FraseBanner>
      </BannerContainer>
      <div style={{ textAlign: 'center' }}>
        <FotoBanner src={foto} alt="robo investigando" />
      </div>
    </BannerBackground>
  )
}

export default Banner
