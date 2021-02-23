import styled from "styled-components";

const Button = styled.button`
  width: 168px;
  height: 48px;
  background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
  border-radius: 8px;
  border: 0px;
  color: white;
  margin-top: 10px;

  @media only screen and (min-device-width: 768px) {
    width: 297px;
    box-shadow: 0px 10px 25px #CF99DB;
  }
`;

const ButtonSpan = styled.span`
  margin-top: 15px;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #FFFFFF;
  
  @media only screen and (min-device-width: 768px) {
    color:  #989FDB;
  }
`;


export { Button, ButtonSpan };
