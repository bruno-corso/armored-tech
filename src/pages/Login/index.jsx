import styled from 'styled-components'
import { cores, fontes } from '../../styles'
import { Link } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: repeating-radial-gradient(
      circle at 0 0,
      ${cores.laranja} 0,
      ${cores.amarelo} 6px
    ),
    repeating-linear-gradient(#ffa80055, ${cores.laranja});
  background-position: 0 0;
`

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: ${cores.cinza};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
`

const Title = styled.h2`
  font-family: ${fontes.destaque};
  margin-bottom: 1rem;
  color: ${cores.laranja};
`

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;

  &:focus {
    border-color: ${cores.laranja};
    outline: none;
  }
`

const Button = styled.button`
  padding: 0.75rem;
  background-color: ${cores.laranja};
  color: ${cores.cinza};
  font-weight: 900;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  font-family: ${fontes.destaque};
  transition: background-color 0.3s;
  text-align: center;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`

const Login = () => {
  return (
    <Container>
      <LoginForm>
        <Title>Login</Title>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button as={Link} to={'/'} type="submit">
          Log In
        </Button>
      </LoginForm>
    </Container>
  )
}

export default Login
