import React from "react";
import { useDispatch } from "react-redux";
import { loginUsers, signUpUsers } from "../../redux/operation";
import { useForm } from "react-hook-form";
import { Form, Label, Input, AuthFormButtonWrapper } from "./AuthForm.styled";
import { Button } from "../../components/Buttons";

function AuthForm() {
  const dispatch = useDispatch();
  const textForInput = {
    enter: "вход",
    signup: "регистрация",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmitAuth = (data, event) => {
    // доступ к тексту button (Используется библиотека emotion-style)
    const { innerHTML } = event.nativeEvent.submitter;

    switch (innerHTML) {
      case `${textForInput.enter}`:
        dispatch(
          loginUsers({
            email: data.email,
            password: data.password,
          })
        );
        break;
      case `${textForInput.signup}`:
        dispatch(
          signUpUsers({
            email: data.email,
            password: data.password,
          })
        );
        break;
      default:
        break;
    }
    reset({ email: "", password: "" });
  };
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmitAuth)} autocomplete="off">
        <Label htmlFor="email">Электронная почта: </Label>
        <Input
          type="text"
          id="email"
          placeholder="your@mail.com"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        {/* Сообщение об обязательном поле */}
        {errors.email && <span>Email is required</span>}
        <Label htmlFor="password">Пароль: </Label>
        <Input
          type="password"
          id="password"
          placeholder="Пароль"
          {...register("password", {
            required: true,
            pattern: /(?=.*[0-9])(?=.*[!@#-$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
          })}
        />
        {errors.password && <span>Password is required</span>}

        <AuthFormButtonWrapper>
          <Button text={`${textForInput.enter}`} />
          <Button
            text={`${textForInput.signup}`}
            onClick={handleSubmit(onSubmitAuth)}
          />
        </AuthFormButtonWrapper>
      </Form>
    </>
  );
}
export default AuthForm;
