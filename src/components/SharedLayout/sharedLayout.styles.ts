import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #471ca9;
  font-size: 22px;
  font-weight: 700px;

  &.active {
    color: #ffffff;
    border-bottom: 1px solid #ffffff;
  }

  :not(:last-child) {
    margin-right: 100px;
  }
`;


