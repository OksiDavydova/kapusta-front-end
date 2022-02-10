import { useState } from "react";
import {
  CashPickerWrapper,
  Arrow,
  CashPickerSpan,
} from "./CashPickerStyle.styled";
import { SvgIcon } from "../SvgIcon";

function CashPicker() {
  const [value, setValue] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    console.log("Была нажата ссылка.");
    value ? setValue(false) : setValue(true);
  }

  const text = value ? "расходы" : "доходы";

  return (
    <CashPickerWrapper>
      <Arrow onClick={handleClick}>
        <SvgIcon w={7} h={12} idIcon={"#left"} />
      </Arrow>
      <CashPickerSpan>{text}</CashPickerSpan>
      <Arrow onClick={handleClick}>
        <SvgIcon w={7} h={12} idIcon={"#right"} />
      </Arrow>
    </CashPickerWrapper>
  );
}

export default CashPicker;
