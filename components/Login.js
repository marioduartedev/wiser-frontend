import { useContext } from 'react';
import AppContext from '../context/AppContext';
import api from '../service/api';

import { Button, ButtonSpan } from '../styles/Button'
import { FlexBox } from '../styles/Divs';


export default function LoginButton() {
  const { setAlert, setLogin, login } = useContext(AppContext);

  const getUsers = async () => {
    return await api.get("users")
      .then((response) => response.data)
      .catch((err) => {
        console.error("ocorreu um erro:" + err);
     });
  }

  const onClick = async () => {
    const users = await getUsers();
    const findUser = users.find((user) => user.email === login.email);

    if(findUser && findUser.senha === login.senha) {
      setAlert({ show: true, msg: 'Sucesso! Você está logado!'})
    } else {
      setAlert({ show: true, msg: 'Erro! Email ou senha incorretos.' })
    }
    setLogin({ ...login, email: '', senha: '' })
  }

  return (
    <FlexBox>
      <Button onClick={onClick} id="button">ENTRAR</Button>
      <ButtonSpan>Esqueceu seu login ou senha? <br />Clique <a href="#">aqui</a></ButtonSpan>
    </FlexBox>
  )
}