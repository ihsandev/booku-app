import styled from "@emotion/styled";

// Footer Tab Bottom
export const WrapTabBottom = styled.div`
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  bottom: 0;
`;
export const TabBottomStyle = styled.div`
  background-color: ${({theme}: any) => theme.colors.primary};
  height: 55px;
  align-items: center;
  color: #fff;
  display: flex;
  transition: all 0.2s ease;
  justify-content: space-around;
  a {
    text-decoration: none;
    color: #fff;
  }
  > div {
    cursor: pointer;
    padding: 10px;
    border-radius: 5px;
    &.active {
      background-color: #fff;
      a {
        color: ${({theme}: any) => theme.colors.primary};
      }
    }
    &:hover {
      background-color: #fff;
      a {
        color: ${({theme}: any) => theme.colors.primary};
      }
    }
  }
`;