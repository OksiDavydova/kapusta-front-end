import styled from "@emotion/styled";
import { colors } from "../../styles/utils";

export const HeaderTag = styled.header`
  height: 56px;
  padding: 12px 20px 13px; // после добавления контейнера скоректировать
  /* background-color: ${colors.white}; */

  /* @media (min-width: 768px) {
    padding-left: 26px;
  } */
`;

export const HeaderContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserProfileWrapper = styled.div`
  margin: 0;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    width: 212px;
    align-items: baseline;
  }
`;
