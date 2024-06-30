import styled from "styled-components";
import { TransactionBoardBtn } from "../TransactionBoard/transactionBoard.styles";

export const DeleteModalContainer = styled.div`
  position: relative;
  width: 400px;
  height: 200px;
  background-color: var(--grey-color);
  border: 1px solid var(--main-color);
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;

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

export const DeleteBtnsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const DeleteText = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
  color: var(--main-color);
  text-align: center;
  line-height: 1.5;
`;

export const DeleteBtn = styled(TransactionBoardBtn)`
  &:hover {
    border-color: var(--accent-color);
    color: var(--accent-color);
  }
`;
