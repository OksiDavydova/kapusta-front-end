import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBalanceUser } from "../../../redux/getBalance/balance-selector";
import { getDate } from "../../../redux/setDate/date-selector";
import { getUpdateBalanceUser } from "../../../redux/getBalance/balance-operation";
import { getUserTransaction } from "../../../redux/getTransaction/transaction-operation";
import { ModalBalance } from "../../Modal";
import {
  ChangeBalanceWrapper,
  ChangeBalanceInput,
  ChangeBalanceButton,
  Span,
  OvalBalanceSpan,
  OvalBalanceDiv,
  BalanceTextOval,
  BalanceText,
  LabelBalance,
} from "./ChangeBalance.styled";
import { toast } from "react-toastify";

function ChangeBalance() {
  const dispatch = useDispatch();
  const [showBalanceModal, setShowBalanceModal] = useState(true);
  const balance = useSelector(getBalanceUser);
  const date = useSelector(getDate);
  //value from input
  const [valueBalance, setValueBalance] = useState("");

  // Coordinates for Modal
  const ref = useRef();
  const [coordinates, setCoordinates] = useState("");

  useEffect(() => {
    setTimeout(() => {
      const rect = ref.current?.getBoundingClientRect();
      setCoordinates(rect);
    });
  }, []);

  // End of part with coordinates

  useEffect(() => {
    dispatch(getUpdateBalanceUser());
  }, [dispatch]);
  // input
  const setBalance = e => {
    setValueBalance(e.target.value);
  };
  // form handle Submit
  const handleSubmit = async e => {
    e.preventDefault();
    // input value to number
    const fixBalanceValue = parseFloat(valueBalance).toFixed(2);

    if (isNaN(valueBalance) || !valueBalance || valueBalance < 0) {
      toast.error(`проверте данные вы ввели: ${valueBalance}`);
      // setValueBalance("");
      return;
    }

    const dateForDB = date.replaceAll("/", "");
    const newTransaction = {
      date: dateForDB,
      description: "Пополнение баланса",
      category: "Доп. доход",
      value: fixBalanceValue,
      income: true,
    };

    const { status } = await axios.post("/api/v1/transactions", newTransaction);
    if (status === 201) {
      dispatch(getUpdateBalanceUser());
      dispatch(getUserTransaction());
      removeBalanceModal();
      setValueBalance("");
      toast.success("Первое пополнение прошло успешно:)");
    }
  };

  const removeBalanceModal = () => {
    setShowBalanceModal(!showBalanceModal);
  };
  //const setBalance = e => {
  //const conversionToNumber = Number(e.target.value);
  //setValueBalance(conversionToNumber);

  // let elem = document.querySelector('#input');

  // console.log(elem.getBoundingClientRect());

  // function getCoords(elem) {
  //   let box = elem.getBoundingClientRect();

  //   return {
  //     top: Math.round(box.top + pageYOffset),
  //     left: Math.round(box.left + pageXOffset)
  //   };
  // }

  return (
    <ChangeBalanceWrapper>
      {balance ? (
        <OvalBalanceSpan>
          <BalanceTextOval>Баланс:</BalanceTextOval>
          <OvalBalanceDiv>{[balance.toLocaleString(), " ", "UAH"]}</OvalBalanceDiv>
        </OvalBalanceSpan>
      ) : (
        <>
          <BalanceText>Баланс:</BalanceText>
          <form onSubmit={handleSubmit}>
            <LabelBalance htmlFor="balance">
              <ChangeBalanceInput
                id="input"
                type="text"
                name="balance"
                // pattern="^[ 0-9]+$"
                placeholder="00.00"
                value={valueBalance}
                onChange={setBalance}
                autoComplete="off"
                autoFocus
                ref={ref}
              />
              <Span>UAH</Span>
            </LabelBalance>
            <ChangeBalanceButton type="submit">Подтвердить</ChangeBalanceButton>
          </form>
        </>
      )}

      {/* --------Modal------------- */}
      {showBalanceModal && !balance && (
        <ModalBalance coordinates={coordinates} onClose={removeBalanceModal} />
      )}
      {/* --------------------- */}
    </ChangeBalanceWrapper>
  );
}
export default ChangeBalance;
