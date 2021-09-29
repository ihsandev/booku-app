import styled from "@emotion/styled"

interface IFavoriteAction {
  onClick: () => void,
  isFavorite: boolean
}

const FavoriteAction: React.FC<IFavoriteAction> = ({onClick, isFavorite}) => {
  return (
    <FavoriteActionStyled
      onClick={onClick} 
      isFavorite={isFavorite}>
        {isFavorite ? 'Favorited' : 'Favorite'}
    </FavoriteActionStyled>
  )
}

const FavoriteActionStyled :any = styled.button`
  position: fixed;
  bottom: 30px;
  right: 80px;
  border: 1.5px solid #ff00aa;
  background-color: ${({isFavorite}: any) => isFavorite ? '#ff00aa' : 'white'};
  color: ${({isFavorite}: any) => isFavorite ? 'white' : '#ff00aa'};
  padding: 10px 15px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 50px;
  &:hover {
    background-color: #ff00aa;
    color: white;
  }
`

export default FavoriteAction