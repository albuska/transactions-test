import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 12px;
  padding-right: 12px;

  @media (min-width: 768px) {
    padding-left: 23px;
    padding-right: 23px;
  }

  @media (min-width: 1024px) {
    padding-left: 29px;
    padding-right: 29px;
  }

  @media (min-width: 1512px) {
    width: 1512px;
    padding-left: 61px;
    padding-right: 61px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const HeaderBtnLogOut = styled.button`
  background-color: transparent;
  border: none;
  color: var(--main-color);
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent-color);
  }
`;
