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

interface IGetBooks {
  id: number;
  page: number;
  size: number;
  setLoading: any;
}

export const fetchBooksByCategory = async ({id, page, size, setLoading}: IGetBooks) => {
  let query = `categoryId=${id}&page=${page}&size=${size}`
  try {
    setLoading(true)
    const res = await fetch(`${baseUrl}/fee-assessment-books?${query}`)
    const data = res.json()
    return data;
  } catch (error) {
    return error;
  } finally {
    setLoading(false)
  }
}