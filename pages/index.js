import Head from 'next/head'
import React, { useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';
import api from '../service/api';

import LoginButton from '../components/Login';
import LoginForm from '../components/Form';
import Alert from '../components/Alert';
import { HeaderTop, HeaderBottom } from '../styles/Header'
import { Content, Main } from '../styles/Divs';


export default function Home() {
  const { setUsers, validation } = useContext(AppContext);
  const getUsers = () => {
    api.get("users")
      .then((response) => setUsers(response.data))
      .catch((err) => {
        console.error("ocorreu um erro:" + err);
     });
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <Head>
        <title>Wiser FrontEnd Test</title>
      </Head>
      <Alert />
      <Main>
        <Content valid={validation}>
          <HeaderTop>Olá, seja bem-vindo!</HeaderTop>
          <HeaderBottom>Para acessar a plataforma, faça seu login</HeaderBottom>
          <LoginForm />
          <LoginButton />
        </Content>
      </Main>
    </div>
  )
}
