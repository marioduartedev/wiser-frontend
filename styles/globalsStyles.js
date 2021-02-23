import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: local('Montserrat'), local('Montserrat'),
    url("/montserrat.ttf"),
    url("/montserrat.ttf");
    font-weight: 300;
    font-style: normal;
  }
  @media only screen and (min-device-width: 310px) {
    html,
    body {
      font-family: Montserrat;
      margin: 0;
      padding: 0;
      background: url("/mobile.png");
      background-repeat: no-repeat;
      background-position: center top;
    }

    a {
      text-decoration: underline;
      color: white;
    }

    .form-label {
      margin-left: 10px;
      font-size: 10.5px;
      color: #383E71;
    }
    .form-control{
      width: 256px;
      height: 48px;
      font-size: 10.5px;
      color: #383E71;
      box-sizing: border-box;
      border-radius: 8px;
      background-color: transparent;
    }
  }
  @media only screen and (min-device-width: 768px) {
      
    body {
      background: url("/ipad.png");
      background-repeat: no-repeat;
    }

    a {
      color: #989FDB;
    }

    .form-control{
      width: 297px;
    }
  }
  @media only screen 
  and (min-device-width: 1024px) {
    body {
      background: url("/desktop.png");
      background-repeat: no-repeat;
    }
  }
`;

export default GlobalStyle;
