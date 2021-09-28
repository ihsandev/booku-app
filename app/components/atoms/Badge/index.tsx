import styled from "@emotion/styled"

interface IBadge {
  title: string;
  active?: boolean;
  onClick?: any;
}

const Badge: React.FC<IBadge> = ({title, active, onClick}) => {
  return (
    <BadgeStyled active={active} onClick={onClick}>
      {title}
    </BadgeStyled>
  )
}

const BadgeStyled : any = styled.div`
  border: 1px solid;
  border-color: ${({theme, active}: any) => active ? theme.colors.secondary : theme.colors.primary};
  padding: 10px 15px;
  border-radius: 25px;
  color: ${({theme, active}: any) => active ? theme.colors.secondary : theme.colors.primary};
  background-color: white;
  cursor: pointer;
  &:hover {
    color: ${({theme}: any) => theme.colors.secondary};
    border-color: ${({theme}: any) => theme.colors.secondary};
  }
  font-size: 12px;
`

export default Badge;