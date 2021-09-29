import { baseUrl } from '../constant'

export const fetchCategories = async () => {
  try {
    const res = await fetch(`${baseUrl}/fee-assessment-categories`);
    const data = res.json()
    return data;
  } catch (error) {
    return error;
  }
}

export const fetchBooksByCategory = async ({id, page, size, setLoading}: any) => {
  let query = `categoryId=${id}&page=${page}&size=${size}`
  try {
    setLoading && setLoading(true)
    const res = await fetch(`${baseUrl}/fee-assessment-books?${query}`)
    const data = res.json()
    return data;
  } catch (error) {
    return error;
  } finally {
    setLoading && setLoading(false)
  }
}