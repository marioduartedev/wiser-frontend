import Head from 'next/head'
import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

import LoginButton from '../components/Login';
import LoginForm from '../components/Form';
import Alert from '../components/Alert';
import { HeaderTop, HeaderBottom } from '../styles/Header'
import { Content, Main } from '../styles/Divs';


export default function Home() {
  const { validation } = useContext(AppContext);

  return (
    <div>
      <Alert />
      <Head>
        <title>Wiser FrontEnd Test</title>
      </Head>
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
