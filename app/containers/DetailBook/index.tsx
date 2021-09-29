/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react"
import { FavoriteAction, Title } from "../../components"
import Layout from "../../layouts"
import { useRouter } from "next/router"
import { fetchBooksByCategory } from "../../api"
import Image from 'next/image'
import styled from "@emotion/styled"

const DetailContainer = () => {
  const router = useRouter()
  const [books, setBooks] = useState([])
  const [favorite, setFavorite] = useState(false)
  const  { id, categoryId, size } = router.query

  const getBooks = async () => {
    const result = await fetchBooksByCategory({
      id: Number(categoryId), page: 1, size: Number(size)
    })
    setBooks(result)
  }

  const _handeIsFavorite = () => {
    if (typeof window !== "undefined") {
      if(localStorage.getItem('favorite_book') !== null) {
        const storage:any = localStorage.getItem('favorite_book') || []
        const data = JSON.parse(storage)
        data.length && data.forEach((item: any) => {
          if(item.id === Number(id)) {
            setFavorite(true)
          }
        })
      }
    }
  }

  useEffect(() => {
    getBooks()
  }, [id])

  useEffect(() => {
    _handeIsFavorite()
  },[id])

  let book: any = books && books.filter((item: any) => item?.id === Number(id))

  const _addToFavorite = () => {
    let newData = {
      ...book[0],
      size
    }
    if(localStorage.getItem('favorite_book') === null) {
      let temp = []
      temp.push(newData)
      localStorage.setItem('favorite_book', JSON.stringify(temp))
      setFavorite(true)
    } else {
      const storage:any = localStorage.getItem('favorite_book')
      const data = JSON.parse(storage)
      data.push(newData)
      localStorage.setItem('favorite_book', JSON.stringify(data))
      setFavorite(true)
    }
  }

  const _removeFavorite = () => {
    const storage:any = localStorage.getItem('favorite_book')
    const data = JSON.parse(storage).filter((item: any) => item.id !== Number(id))
    localStorage.setItem('favorite_book', JSON.stringify(data))
    setFavorite(false)
  };

  const _handleFavorite = () => {
    if(favorite) {
      _removeFavorite()
    } else {
      _addToFavorite()
    }
  }

  return (
    <Layout title="Detail Booku" hasSearch={false} hasBottom={false}>
      <Wrapper>
        {book[0] ? (
          <>
            <Title title={`${book[0]?.title}`} />
            {book[0]?.cover_url && (
              <BookCover>
                <img src={book[0]?.cover_url} alt="Image Detail Book" />
              </BookCover>
            )}
            <br />
            <h4>Penulis Buku</h4>
            <p>{book[0]?.authors[0]}</p>
            <hr />
            <br />
            <h4>Judul Buku</h4>
            <p>{book[0]?.title}</p>
            <hr />
            <br />
            <h4>Deskripsi Buku</h4>
            <p>{book[0]?.description}</p>
            <FavoriteAction
              onClick={_handleFavorite} 
              isFavorite={favorite}
            />
          </>
        ) : <>Load Detail Booku..</>}
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  padding: 20px;
`

const BookCover = styled.div`
  > img {
    width: 100%;
  }
  overflow: hidden;
  position: relative;
` 

export default DetailContainer