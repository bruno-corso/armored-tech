import styled from 'styled-components'
import { cores } from '../../styles'

const FormComponent = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;

  label {
    text-transform: lowercase;
    font-weight: 900;
    margin-bottom: 8px;
  }

  input,
  textarea {
    margin-bottom: 8px;
    padding: 8px 16px;
    border-radius: 10px;
    border: 3px solid ${cores.cinza_claro};
  }

  textarea {
    height: 100px;
  }

  button {
    margin-top: 1rem;
    padding: 8px 16px;
    width: 40%;
    background-color: ${cores.laranja};
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
  }
`

function FormContato() {
  return (
    <FormComponent action="#">
      <label>Nome</label>
      <input type="text" />
      <label>E-mail</label>
      <input type="email" />
      <label>Telefone</label>
      <input type="text" />
      <label>Mensagem</label>
      <textarea></textarea>
      <button>enviar</button>
    </FormComponent>
  )
}

export default FormContato
