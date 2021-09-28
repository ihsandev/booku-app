import { useEffect, useState } from "react"
import { fetchBooksByCategory, fetchCategories } from "../../api"
import Layout from "../../layouts"
import BookCategories from "./partials/BookCategories"
import BookLists from "./partials/BookLists"

const HomeContainer : React.FC = () => {
  const [categories, setCategories] = useState([])
  const [books, setBooks] = useState([])
  const [categoryIdx, setCategoryIdx] = useState(0)
  const [categoryId, setCategoryId] = useState(1)
  const [page, setPage] = useState(1)
  const [size, setSize] = useState(10)
  
  const getCategories = async () => {
    const result = await fetchCategories()
    setCategories(result);
  }

  const getBooks = async () => {
    const result = await fetchBooksByCategory({
      id: categoryId, page, size
    })
    setBooks(result)
  }
  
  useEffect(() => {
    getCategories()
  },[])

  useEffect(() => {
    getBooks()
  }, [categoryId])

  console.log('books', books)
  console.log('id', categoryId)
  
  return (
    <Layout title="Home Booku">
      <>
        <BookCategories 
          categories={categories}
          categoryIdx={categoryIdx}
          setCategoryIdx={setCategoryIdx}
          setCategoryId={setCategoryId}
        />
        <BookLists books={books} categories={categories} />
      </>
    </Layout>
  )
}

export default HomeContainer
