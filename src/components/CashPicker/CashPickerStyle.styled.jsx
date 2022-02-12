import styled from "@emotion/styled";
import {colors} from '../../styles/utils'

export const CashPickerWrapper = styled.div`
  display: flex;
  justify-content: center;

  outline: 1px solid red;
`;

export const CashPickerDiv = styled.div`
  width: 134px;
  display: flex;
  justify-content: center;
  padding: 2px 0px;
`

export const Arrow = styled.a`
  width: 7px;
  height: 12px;
  margin-top: 2px;

  outline: 1px solid red;
`;

export const CashPickerSpan = styled.span`
  width: 96px;
  margin: 0px 15px;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  color: ${colors.black};

  outline: 1px solid red;
`;