import { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Button, ButtonSpan } from '../styles/Button'
import { FlexBox } from '../styles/Divs';

export default function LoginButton() {
  const { setAlert, setLogin, login, users } = useContext(AppContext);
  const onClick = () => {
    const findUser = users.find((user) => user.email === login.email);

    if(findUser && findUser.senha === login.senha) {
      setAlert({ show: true, msg: 'Sucesso! Você está logado!'})
      setLogin({ ...login, email: '', senha: '' })
    } else {
      setAlert({ show: true, msg: 'Erro! Email ou senha incorretos.' })
    }
  }

  return (
    <FlexBox>
      <Button onClick={onClick}>ENTRAR</Button>
      <ButtonSpan>Esqueceu seu login ou senha? <br />Clique <a href="#">aqui</a></ButtonSpan>
    </FlexBox>
  )
}