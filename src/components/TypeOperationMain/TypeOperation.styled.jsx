import styled from "@emotion/styled";
import { colors } from "../../styles/utils";

export const TypeOperationWrapper = styled.div`
  width: 100%;
  text-align: start;
  /* outline: 1px solid red; */
  margin-left: auto;
  margin-right: auto;
`;

export const ChooseOperationButton = styled.button`
  display: inline-block;
  width: 125px;
  height: 44px;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  font-weight: bold;
  text-transform: uppercase;

  border: none;
  border-radius: 16px;

  color: ${(props) => props.isActive} ;
  background-color: ${(props) => props.isBgActive} ;
  /* background-color: ${colors.bgMainNav}; */

  transition: color ${colors.animation}

  &:hover {
    color: ${colors.orange};
  }
  &:focus {
    color: ${colors.orange};
  }
`;
