import styled from "@emotion/styled";
import { MediaQuery } from "../../../utils/mq";

// Header
export const HeaderStyle = styled.header`
  background-color: ${({theme}: any) => theme.colors.primary};
  box-sizing: border-box;
  position: fixed;
  z-index: 99;
  top: 0;
  width: 100%;
  padding: 10px;
  ${MediaQuery.smMin} {
    padding: 10px 0;
  }
`;

export const Search = styled.div`
  box-sizing: border-box;
  display: flex;
  input {
    flex: 1;
    background: rgba(255, 255, 255, 0.2);
    outline: none;
    height: 32px;
    padding: 0 15px;
    border: none;
    width: 100%;
    color: #fff;
    border-radius: 50px;
    ::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
    &:focus {
      box-shadow: 0px 1px 5px rgba(3, 151, 12, 0.5);
    }
  }
`;
