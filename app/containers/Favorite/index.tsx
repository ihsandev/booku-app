import styled from "@emotion/styled";
import Link from 'next/link'
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../context/store";
import { CardBook, Title } from "../../components";
import Layout from "../../layouts";


const FavoriteContainer : React.FC = () => {
  const [books, setBooks] = useState([])
  const [state] = useContext(Context);

  
  useEffect(() => {
    if (typeof window !== "undefined") {
      if(localStorage.getItem('favorite_book') !== null) {
        const storage:any = localStorage.getItem('favorite_book') || []
        const data = JSON.parse(storage)
        setBooks(data)
      }
    }
  }, [])

  const filterData = books && books.filter((filt: any) =>
    filt?.title?.toLowerCase()?.includes(state?.keyword?.toLowerCase())
  );

  return (
    <Layout>
      <FavoriteContainerStyled>
        <Title title="Daftar Buku Favorit" />
        <Wrapper>
          {
            filterData.length ? filterData.map((book: any, idx: number) => {
              return (
                <Link href={{pathname: `/detail/${book.id}`, query: {categoryId: book.category_id, size: book.size}}} key={idx}>
                  <a>
                    <CardBook 
                      title={book.title}
                      cover={book.cover_url}
                    />
                  </a>
                </Link>
              )
            }) : <>Belum Ada Buku Favorit..</>
          }
        </Wrapper>
      </FavoriteContainerStyled>
    </Layout>
  )
}

const FavoriteContainerStyled = styled.section`
  width: 100%;
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

export default FavoriteContainer;