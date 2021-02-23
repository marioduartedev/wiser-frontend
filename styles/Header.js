import styled from "styled-components";

const HeaderTop = styled.h1`
  margin-top: 24px;
  width: 139px;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: #383E71;

  @media only screen and (min-device-width: 768px) {
    width: 231px;
    height: 96px;
    font-size: 40px;
    line-height: 48px;
    text-align: left;
  }
`;

const HeaderBottom = styled.h2`
  margin: 10px;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  color: #989FDB;

  @media only screen and (min-device-width: 768px) {
    width: 222px;
    font-size: 16px;
  }
`;

export { HeaderTop, HeaderBottom };
