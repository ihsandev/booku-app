import styled from "@emotion/styled";
import Link from 'next/link'
import { useContext } from "react";
import { Context } from "../../../../context/store";
import { MediaQuery } from "../../../../utils/mq";
import { Button, CardBook, Title } from "../../../components";

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

  const [state] = useContext(Context);

  const filterData = books && books.filter((filt: any) =>
    filt?.title?.toLowerCase()?.includes(state?.keyword?.toLowerCase())
  );

  return (
    <BookListsStyled>
      <Title title="Daftar Buku" />
      <Wrapper>
        {
          loading ? <>Loading...</> :
          books && 
          filterData.length ? filterData.map((book, idx) => {
            let category: any = categories.filter(category => category.id === book.category_id);
            return (
              <Link href={{pathname: `/detail/${book.id}`, query: {categoryId: book.category_id, size}}} key={idx}>
                <a>
                  <CardBook 
                    title={book.title}
                    cover={book.cover_url}
                    category={category[0]?.name}
                  />
                </a>
              </Link>
            )
          }) : <>Buku Tidak ditemukan.. <br /> </>
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
  justify-content: space-around;
  a {
    text-decoration: none;
    color: ${({theme}: any) => theme.colors.primary};
  }
`

const MoreAction = styled.div`
  display: flex;
  justify-content: center;
`

export default BookLists;