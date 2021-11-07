import { Link } from "react-scroll";
import styled from "styled-components";

export const Button = styled(Link)`
  align-items: center;
  background: ${({ primary }) => (primary ? "#01bf71" : "#010606")};
  border-radius: 50px;
  color: ${({ dark }) => (dark ? "#10606" : "#fff")};
  cursor: pointer;
  display: flex;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  justify-content: center;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  transition: all 0.2s ease-in-out;
  white-space: nowrap;

  &:hover {
    background: ${({ primary }) => (primary ? "#fff" : "#01bf71")};
    transition: all 0.2s ease-in-out;
  }
`;
