import styled from "@emotion/styled";
import Image from 'next/image'
import Link from 'next/link'
import { MediaQuery } from "../../../../utils/mq";
import { Button, Title } from "../../../components";

interface IBookLists {
  books: Array<any>,
  categories: Array<{
    id: number;
    name: string;
  }>,
  loading: boolean;
  setSize: any;
  size: number;
}

const BookLists : React.FC<IBookLists> = ({books, categories, loading, size, setSize}) => {
  return (
    <BookListsStyled>
      <Title title="Daftar Buku" />
      <Wrapper>
        {
          loading ? <>Loading...</> :
          books && books.map((book, idx) => {
            let category: any = categories.filter(category => category.id === book.category_id);
            return (
              <Link href={`/detail/${book.id}`} key={idx}>
                <a>
                  <div className="book">
                    <div>
                      <Image width={150} height={200} src={book.cover_url} alt="Cover Buku" />
                    </div>
                    <h1>{book.title}</h1>
                    <p>{category[0]?.name}</p>
                  </div>
                </a>
              </Link>
            )
          })
        }
      </Wrapper>
      <MoreAction>
        <Button onClick={() =>setSize(size + 6)} title="Lihat lebih banyak.." />
      </MoreAction>
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
  div.book {
    width: 150px;
    overflow: hidden;
    border-radius: 5px;
    margin-bottom: 1rem;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: ${({theme}: any) => theme.colors.primary};
  }
  h1 {
    font-size: 14px;
  }
  p {
    font-size: 11px;
  }
`

const MoreAction = styled.div`
  display: flex;
  justify-content: center;
`

export default BookLists;