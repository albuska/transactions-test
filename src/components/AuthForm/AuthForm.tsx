import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";
import { Icon } from "../Icon";
import {
  AuthFormBtnSubmit,
  AuthFormContainer,
  AuthFormContainerInside,
  AuthFormInput,
  AuthFormLabel,
  AuthFormStyled,
  AuthFormTitle,
  ErrorMessageText,
} from "./authForm.styles";
import { authSchema } from "../../constants";
import { registerUser } from "../../services/api";
import useAuthStore from "../../useAuthStore";

export type AuthFormValues = {
  email: string;
  password: string;
};

const AuthForm = () => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const { registerZustandUser } = useAuthStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormValues>({
    resolver: yupResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const toggleShowPassword = () => {
    setIsShowPassword((prev) => !prev);
  };

  const onSubmit = async (formData: AuthFormValues) => {
    console.log(formData, "data");
    await registerUser(formData);
    registerZustandUser();
  };

  return (
    <AuthFormContainer>
      <AuthFormContainerInside>
        <Icon name="icon-auth" width={40} height={40} />
        <AuthFormTitle>Sign in to your account</AuthFormTitle>
      </AuthFormContainerInside>
      <AuthFormStyled onSubmit={handleSubmit(onSubmit)}>
        <AuthFormLabel>
          Email address
          <AuthFormInput
            type="email"
            autoComplete="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              validate: {
                isValidEmail: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Email is not valid",
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => (
              <ErrorMessageText>{message}</ErrorMessageText>
            )}
          />
        </AuthFormLabel>
        <AuthFormLabel>
          Password
          <AuthFormInput
            type={isShowPassword ? "text" : "password"}
            autoComplete="current-password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
              validate: {
                minLength: (value) =>
                  value.length >= 8 ||
                  "Password should has more than 8 characters",
                isCapitalLetter: (value) =>
                  /[A-Z]/.test(value) ||
                  "Password should has at least one capital letter",
                isLowerCaseLetter: (value) =>
                  /[a-z]/.test(value) ||
                  "Password should has at least one lower case letter",
                isContainNumber: (value) =>
                  /\d/.test(value) || "Password should has at least one number",
              },
            })}
          />
          <Icon
            name={isShowPassword ? "icon-eye-open" : "icon-eye-close"}
            width={30}
            height={20}
            onClick={toggleShowPassword}
            className="show-password-icon"
          />
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => (
              <ErrorMessageText>{message}</ErrorMessageText>
            )}
          />
        </AuthFormLabel>
        <AuthFormBtnSubmit type="submit">Sign in</AuthFormBtnSubmit>
      </AuthFormStyled>
    </AuthFormContainer>
  );
};

export default AuthForm;
