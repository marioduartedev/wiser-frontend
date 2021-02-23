import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled(FlexBox)`
  margin-top: 139px;
  width: 311px;
  height: ${props => props.valid ? "357px" : "381px"};
  background: #FAF5FF;
  border-radius: 8px;

  @media only screen and (min-device-width: 768px) {
    margin-top: 0;
    justify-content: center;
    width: 60%;
    height: 1024px;
    border-radius: 0px;
  }
  @media only screen and (min-device-width: 1024px) {
    width: 44%;
  }
`;

const Main = styled(FlexBox)`
  margin: 0;
  background: linear-gradient(180deg, rgba(105, 57, 153, 0.2) 30%, #130525 70%);
  width: 100vw;
  height: 100vh;

  @media only screen and (min-device-width: 768px) {
    align-items: flex-end;
    background: linear-gradient(180deg, rgba(105, 57, 153, 0.2) 30%, rgba(19, 5, 37, 0.75) 70%);
  }
`;

const ValidEmail = styled.div`
  color: #FF377F;
  font-size: 10px;
  margin: 10px;
  display: ${props => props.valid ? "none" : "block"};
`;


export { Content, Main, FlexBox, ValidEmail };
