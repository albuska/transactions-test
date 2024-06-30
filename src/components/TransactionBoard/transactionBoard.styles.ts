import styled from "styled-components";
import { Select } from "@chakra-ui/react";

export const TransactionBoardContainer = styled.div`
  .chakra-select__icon {
    display: none;
  }
`;

export const TransactionBoardContainerTopBox = styled.div`
  width: 100%;
  height: 40px;
  background-color: transparent;
  border: 1px solid var(--main-color);
  margin-bottom: 20px;
`;

export const TransactionBoardMainBoxLeft = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;

export const TransactionBoardMainInsideBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
`;

export const TransactionBoardTable = styled.table`
  width: 25%;
  border: 1px solid var(--main-color);
  background-color: transparent;
`;

export const TransactionBoardThead = styled.thead`
  background-color: var(--accent-color);
`;

export const TransactionBoardTrTitle = styled.tr`
  font-size: 20px;
  font-weight: 500;
`;

export const TransactionBoardThTitle = styled.th`
  padding: 5px 0;
  color: var(--second-color);
`;

export const TransactionBoardTbody = styled.tbody`
  height: 240px;
`;

export const TransactionBoardStatusBox = styled.div``;

export const TransactionBoardSelect = styled(Select)`
  background-color: transparent;
  border: 1px solid var(--main-color);
  padding: 3px 5px;
  color: var(--main-color);
  font-size: 20px;
  font-weight: 500;
`;

export const TransactionBoardOption = styled.option`
  background-color: var(--grey-color);
`;

export const TransactionBoardBtnBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;

export const TransactionBoardBtn = styled.button`
  padding: 10px 25px;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid var(--main-color);
  color: var(--main-color);
  font-size: 20px;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:not(:disabled):hover,
  &:not(:disabled):focus {
    background-color: var(--grey-color);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const ExportCheckboxesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const ExportCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 15px;

  input[type="checkbox"] {
    position: relative;
    cursor: pointer;
  }
  input[type="checkbox"]:before {
    content: "";
    display: block;
    position: absolute;
    width: 15px;
    height: 15px;
    top: 0;
    left: 0;
    border: 1px solid var(--main-color);
    background-color: var(--grey-color);
  }
  input[type="checkbox"]:checked:before {
    content: "";
    display: block;
    position: absolute;
    width: 15px;
    height: 15px;
    border: 1px solid var(--second-color);
    top: 0;
    left: 0;
    background-color: var(--accent-color);
  }
  input[type="checkbox"]:checked:after {
    content: "";
    display: block;
    width: 5px;
    height: 10px;
    border: solid var(--second-color);
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 2px;
    left: 6px;
  }
`;

export const HiddenLoadCsvInput = styled.input`
  display: none;
`;
