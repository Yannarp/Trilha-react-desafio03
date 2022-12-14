import React from 'react'
import logo from '../../assets/logo-dio.png';
import { useNavigate  } from "react-router-dom";
import { Button } from '../Button';

import { Container, Wrapper, BuscarInputContainer, Input, Row, Menu, MenuRight, UserPicture} from './styles';

const Header = ({autenticado}) => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
      navigate('/login')
  }

  const handleClickRegister = () => {
    navigate('/cadastro')
}

  return (
    <Wrapper>
      <Container>
          <Row>
            <img src={logo} alt="Logo da dio"/>
            {autenticado ? (
              <>
               <BuscarInputContainer>
                <Input placeholder='Buscar...'/>
               </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
              </>
            ) : null}
          </Row>
          <Row>
              {autenticado ? (
                <UserPicture src="https://avatars.githubusercontent.com/u/81976280?s=400&u=43ed720c00b5af65e05b34e9354871fedaa9cae0&v=4"/>
              ) : (
              <>
                <MenuRight href="/">Home</MenuRight>
                <Button title="Entrar" onClick={handleClickSignIn} />
                <Button title="Cadastrar"  onClick={handleClickRegister}  />
              </>)}
          </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }