import styled from 'styled-components'
import { cores } from '../../styles'
import logo_completo from '../../assets/images/logo_completo.png'
import cachorros from '../../assets/images/cachorros.png'

const BannerBackground = styled.div`
  background-image: repeating-radial-gradient(
      circle at 0 0,
      ${cores.laranja} 0,
      ${cores.amarelo} 6px
    ),
    repeating-linear-gradient(#ffa80055, ${cores.laranja});
  background-position: 0 0;
  z-index: 0;
  height: 90vh;
`

const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 32px 10% 0 10%;
  height: 320px;
`

const ImagemBanner = styled.img`
  width: 40%;
  z-index: 1;
  max-width: 400px;
`

const FraseBanner = styled.h3`
  width: 50%;
  font-size: 42px;
  line-height: 63px;
  font-weight: 900;
  color: ${cores.cinza};

  @media (max-width: 767px) {
    font-size: 32px;
    line-height: 48px;
  }
`

const ImagemCachorros = styled.img`
  width: 70%;
  margin: 0 auto;

  @media (max-width: 767px) {
    width: 90%;
  }
`

function Banner() {
  return (
    <BannerBackground>
      <BannerContainer>
        <FraseBanner>
          tudo o que seu pet precisa, você encontra aqui no <i>meuamigopet</i>!
        </FraseBanner>
        <ImagemBanner src={logo_completo} alt="logo meu amigo pet" />
      </BannerContainer>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <ImagemCachorros src={cachorros} alt="cachorros" />
      </div>
    </BannerBackground>
  )
}

export default Banner
