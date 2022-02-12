import styled from "@emotion/styled";
import { device } from "../../styles/utils";

export const ContentWrapper = styled.div`
  width: 100%;
  border: 1px solid red;
  padding-top: 30px;

  @media ${device.tablet} {
    padding-top: 40px;
  }
`;

export const AuthWrapper = styled.div`
  padding: 40px 18px 53px 18px;
  width: 300px;
  height: 525px;
  background: #ffffff;
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  border-radius: 30px;
`;
