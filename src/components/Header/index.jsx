import styled from 'styled-components'
import { cores, fontes } from '../../styles'
import { BsInfoSquareFill } from 'react-icons/bs'
import { PiTargetBold } from 'react-icons/pi'
import { BiSolidContact } from 'react-icons/bi'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from 'react-router-dom'

const HeaderBar = styled.header`
  background-color: ${cores.laranja};
  background-repeat: repeat;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 16px 80px;
  padding-top
  border-bottom: 1px solid ${cores.cinza_claro};

  @media (max-width: 700px) {
    padding: 16px 32px;
    flex-direction: column;
  }
`
const LogoHeader = styled.img`
  height: 60px;
`

const ListaHeader = styled.ul`
  list-style: none;
  text-align: center;
  font-size: 18px;
  display: flex;
  flex-direction: row;

  li,
  a {
    padding-left: 32px;
    text-transform: lowercase;
    font-weight: 900;
    color: ${cores.cinza};
    font-family: ${fontes.destaque};

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }

    @media (max-width: 500px) {
      margin-top: 16px;
      padding: 0;
    }
  }

  @media (max-width: 500px) {
    width: 100%;
    justify-content: space-around;
  }
`

const LoginLink = styled.a`
  width: 75%;
  max-width: 200px;
  text-align: center;
  font-family: ${fontes.destaque};
  background-color: ${cores.cinza};
  color: ${cores.laranja};
  font-weight: 700;
  letter-spacing: 1.25px;
  text-transform: lowercase;
  padding: 10px 16px;
  border-radius: 10px;
  cursor: pointer;
  color: ${cores.laranja};
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 700px) {
    margin-top: 32px;
  }
`

function Header() {
  return (
    <HeaderBar>
      {/* <LogoHeader src={logo} alt="logo efood" /> */}
      <ListaHeader>
        <li>
          <AnchorLink href="#sobre-id">
            <span style={{ marginRight: '10px' }}>
              <BsInfoSquareFill size={15} />
            </span>
            Sobre
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#objetivos-id">
            <span style={{ marginRight: '10px' }}>
              <PiTargetBold size={20} />
            </span>
            Objetivo
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#contato-id">
            <span style={{ marginRight: '10px' }}>
              <BiSolidContact size={20} />
            </span>
            Contato
          </AnchorLink>
        </li>
      </ListaHeader>
      <LoginLink as={Link} to={'login'}>
        marketplace
      </LoginLink>
    </HeaderBar>
  )
}

export default Header
