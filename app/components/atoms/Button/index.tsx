import styled from "@emotion/styled"

const Button = ({title, ...props}: any) => {
  return (
    <ButtonStyled {...props}>
      {title}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  border: none;
  outline: none;
  padding: 10px 15px;
  background-color: ${({theme}: any) => theme.colors.primary};
  color: white;
  border-radius: 50px;
  cursor: pointer;
`

export default Button;