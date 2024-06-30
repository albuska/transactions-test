import styled from "styled-components";

export const AuthFormContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  .show-password-icon {
    position: absolute;
    right: 20px;
    top: 60%;
    color: var(--grey-color);
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: var(--main-color);
    }
  }
`;

export const AuthFormContainerInside = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 100%;
  max-width: 100%;
`;

export const AuthFormTitle = styled.h2`
  margin-top: 10px;
  text-align: center;
  font-size: 25px;
  font-weight: 700;
  color: var(--main-color);
  margin-bottom: 0;
`;

export const AuthFormStyled = styled.form`
  width: 500px;
  border: 1px solid var(--main-color);
  border-radius: 10px;
  margin-top: 40px;
  padding: 10px 15px;

  @media (min-width: 768px) {
    padding: 20px 30px;
  }
`;

export const AuthFormLabel = styled.label`
  position: relative;
  display: block;
  font-size: 18px;
  font-weight: 500;
  color: var(--main-color);
  margin-top: 20px;
`;

export const AuthFormInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  border-radius: 10px;
  border: 1px solid var(--main-color);
  color: var(--main-color);
  background-color: transparent;
  padding: 0;
  padding: 15px 10px;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 500;
  transition: border-color 0.3s ease;

  &:focus,
  &:hover {
    border-color: var(--accent-color);
  }
`;

export const ErrorMessageText = styled.p`
  color: var(--error-color);
`;

export const AuthFormBtnSubmit = styled.button`
  display: block;
  width: 30%;
  border-radius: 10px;
  border: 1px solid var(--main-color);
  color: var(--main-color);
  background-color: transparent;
  padding: 10px;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 500;
  transition: background-color 0.3s ease;
  cursor: pointer;
  margin-top: 40px;

  &:hover {
    background-color: var(--grey-color);
  }
`;
