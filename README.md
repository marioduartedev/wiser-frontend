# Boas vindas ao repositório da Aplicação de Login para Processo seletivo da empresa Wiser!

Esta aplicação atende as necessidades do desafio técnico da primeira fase do processo 
seletivo da empresa Wiser.
A aplicação demonstra as habilidades pessoais de Mário Duarte[https://github.com/marioduartedev]
e linha de raciocínio, bem como o avanço da tarefa para prosseguir para futuras etapas do processo.

## Objetivo do Deasfio:
O objetivo era criar uma aplicação de login, ou seja, acesso de um usuário.
Para isso foi utilizado um serviço de mock para o serviço de API, do site https://www.mockapi.io.
URL Base: https://6033de81843b150017931c55.mockapi.io
O endepoint utilizado: /users

 Esse projeto utiliza [Next.js](https://nextjs.org/)

## Iniciando

Primeiro, instale as dependências: 
```npm install```


Depois, rode a aplicação:
```bash
npm run dev
# or
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

A aplicação também conta com um arquivo de testes App.test.js e foram utilizados React Test Library e Jest

Para rodar os testes
```bash
npm run test
```

## Stack Utilizada:

● React
● Hooks
● NextJS
● Styled Components
● Context Api (similar ao Redux)
● Axios

## Funcionamento esperado:
 O funcionamento esperado pela aplicação é que ao preencher e-mail e senha deve ser mostrado um alerta com
sucesso ou erro. Também há uma validação de preenchimento correto no campo de texto email utilizando Regex.
A aplicação possui responsividade para diferentes tipos de equipamentos (Desktop, Iphone, Ipad).


