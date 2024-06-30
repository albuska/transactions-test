import styled from "styled-components";

export const EditModalContainer = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  background-color: var(--grey-color);
  border: 1px solid var(--main-color);
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 150px;

  .icon-cross {
    position: absolute;
    right: 15px;
    top: 15px;
    width: 20px;
    height: 20px;
    color: var(--second-color);
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: var(--main-color);
    }
  }
`;

export const EditModalForm = styled.form`
  max-height: 100%;
  height: 320px;
  display: flex;
  flex-direction: column;
`;

export const EditModalFormInside = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const EditModalFormSelect = styled.select`
  width: 100%;
  height: 55px;
  border: 1px solid var(--main-color);
  border-radius: 10px;
  background-color: transparent;
  color: var(--main-color);
  font-size: 20px;
  padding: 15px 20px;
  cursor: pointer;
`;

export const EditModalFormOption = styled.option`
  color: var(--second-color);
  cursor: pointer;
`;

export const EditModalFormInputSubmit = styled.input`
  background-color: transparent;
  height: 55px;
  color: var(--main-color);
  font-size: 20px;
  border: 1px solid var(--main-color);
  border-radius: 10px;
  padding: 15px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    border-color: var(--accent-color);
  }
`;
