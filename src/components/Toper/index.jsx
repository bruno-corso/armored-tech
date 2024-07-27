import styled from 'styled-components'
import { cores } from '../../styles'
import { FaMobileAlt } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import logo from '/shield_branco.png'

const FixTop = styled.div`
  position: fixed;
  width: 100%;
  padding: 8px 5%;
  display: flex;
  justify-content: space-between;
  font-weight: 100;
  background-color: ${cores.escrita_intenso};
  color: ${cores.branco};
  text-align: center;

  a,
  span {
    color: ${cores.branco};
    text-decoration: none;
  }
`

function Toper() {
  return (
    <FixTop>
      <a href="tel:+393471469171">
        <FaMobileAlt size={12} /> Contato
      </a>
      <img src={logo} alt="logo" width={18} />
      <a href="mailto:suporte@armoredtech.com">
        <FiMail size={10} /> armoredtech.com
      </a>
    </FixTop>
  )
}

export default Toper
