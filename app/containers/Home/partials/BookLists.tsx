import styled from "@emotion/styled";
import Image from 'next/image'
import { MediaQuery } from "../../../../utils/mq";
import { Title } from "../../../components";

interface IBookLists {
  books: Array<any>,
  categories: Array<{
    id: number;
    name: string;
  }>
}

const BookLists : React.FC<IBookLists> = ({books, categories}) => {
  return (
    <BookListsStyled>
      <Title title="Daftar Buku" />
      <Wrapper>
        {
          books && books.map((book, idx) => {
            let category: any = categories.filter(category => category.id === book.category_id);
            return (
              <div key={idx}>
                <div>
                  <Image width={150} height={200} src={book.cover_url} alt="Cover Buku" />
                </div>
                <h1>{book.title}</h1>
                <p>{category[0]?.name}</p>
              </div>
            )
          })
        }
      </Wrapper>
    </BookListsStyled>
  )
}

const BookListsStyled = styled.section`
  width: 100%;
  background-color: ${({theme}: any) => theme.colors.softSecondary};
  padding: 20px;
  box-sizing: border-box;
`
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  ${MediaQuery.smMin} {
    /* grid-template-columns: repeat(3, 1fr); */
  }
  > div {
    width: 150px;
    overflow: hidden;
    border-radius: 5px;
    margin-bottom: 1rem;
    cursor: pointer;
  }
  h1 {
    font-size: 14px;
  }
  p {
    font-size: 11px;
  }
`

export default BookLists;