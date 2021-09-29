import styled from "@emotion/styled"
import Image from 'next/image'

interface ICardBook {
  cover?: any;
  title?: string;
  category?: string;
} 

const CardBook: React.FC<ICardBook> = ({cover, title, category}) => {
  return (
    <CardBookStyled>
      <div>
        <Image width={150} height={200} src={cover} alt="Cover Buku" />
      </div>
      <h1>{title}</h1>
      <p>{category}</p>
    </CardBookStyled>
  )
}

const CardBookStyled = styled.div`
  width: 150px;
  overflow: hidden;
  border-radius: 5px;
  margin-bottom: 1rem;
  cursor: pointer;
  h1 {
    font-size: 14px;
  }
  p {
    font-size: 11px;
  }
`

export default CardBook