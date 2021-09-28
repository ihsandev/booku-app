import styled from "@emotion/styled"

interface ITitle {
  title: string;
}

const Title : React.FC<ITitle> = ({title}) => {
  return (
    <TitleStyled>
      {title}
    </TitleStyled>
  )
}

const TitleStyled = styled.h2`
  margin-bottom: 1rem;
  color: ${({theme}: any) => theme.colors.primary};
  flex: 1;
`

export default Title