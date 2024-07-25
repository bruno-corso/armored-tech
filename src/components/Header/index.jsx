import styled from 'styled-components'
import { cores, fontes } from '../../styles'
import logo from '../../assets/images/logo_meuamigopet.png'
import pata from '../../assets/images/pata-de-cachorro.png'
import { BsInfoSquareFill } from 'react-icons/bs'
import { PiTargetBold } from 'react-icons/pi'
import { BiSolidContact } from 'react-icons/bi'

const HeaderBar = styled.header`
  background-color: ${cores.laranja};
  background-image: ${pata};
  background-repeat: repeat;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 16px 80px;
  border-bottom: 1px solid ${cores.cinza_claro};

  @media (max-width: 500px) {
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

  li {
    padding-left: 48px;
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

function Header() {
  return (
    <HeaderBar>
      <LogoHeader src={logo} alt="logo efood" />
      <ListaHeader>
        <li>
          <span style={{ marginRight: '10px' }}>
            <BsInfoSquareFill size={15} />
          </span>
          Sobre
        </li>
        <li>
          <span style={{ marginRight: '10px' }}>
            <PiTargetBold size={20} />
          </span>
          Objetivo
        </li>
        <li>
          <span style={{ marginRight: '10px' }}>
            <BiSolidContact size={20} />
          </span>
          Contato
        </li>
      </ListaHeader>
    </HeaderBar>
  )
}

export default Header
