import styled from "styled-components";

export const TransactionsTableContainer = styled.div`
  margin-top: 37px;
  border: 1px solid var(--main-color);

  .MuiPaginationItem-root {
    padding: 20px 0;
    padding-left: 10px;
    color: rgba(255, 255, 255, 0.17);
    font-size: 20px;
    font-weight: 400;
  }

  .MuiPaginationItem-root:focus {
    color: #ffffff;
  }

  .MuiPaginationItem-icon {
    width: 25px;
    height: 25px;
    fill: var(--accent-color);
  }

  .Mui-selected {
    color: #ffffff;
  }
`;

export const TransactionsTableNoListLoadText = styled.p`
  max-width: 600px;
  padding: 13px 0;
  margin: 0 auto;
  font-size: 24px;
  font-weight: 800;
  text-align: center;
  color: var(--main-color);
`;

export const TransactionsTableThead = styled.thead``;

export const TransactionsTableTBody = styled.tbody``;

export const TransactionsTableTr = styled.tr``;

export const TransactionsTableTh = styled.th`
  border: 1px solid var(--main-color);
  padding: 15px 67px;
`;

export const TransactionsTableTd = styled.td`
  border: 1px solid var(--main-color);
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;
`;

export const TransactionsTableBtnBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const TransactionsTableBtn = styled.button`
  background-color: transparent;
  border: 1px solid var(--main-color);
  padding: 3px 8px;
  color: var(--main-color);
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: grey;
  }
`;

export const SearchInputBox = styled.div`
  width: 95%;
  position: relative;
  padding: 20px;
  padding-bottom: 0;
  display: flex;
  justify-content: center;

  .icon-search {
    position: absolute;
    left: 33px;
    top: 42px;
    stroke: var(--main-color);
    fill: transparent;
  }

  &:hover {
    input {
      border-color: var(--accent-color);
    }
    .icon-search {
      stroke: var(--accent-color);
    }
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  font-size: 16px;
  border: 1px solid var(--main-color);
  color: var(--main-color);
  background-color: transparent;
  padding: 10px;
  margin-bottom: 20px;
  padding-left: 35px;
`;

export const SearchBtn = styled.button`
  position: absolute;
  right: 10px;
  top: 7px;
  width: 70px;
  height: 25px;
  border-radius: 8px;
  background-color: var(--main-color);
  color: var(--second-color);

  &:hover {
    background-color: var(--accent-color);
  }
`;
