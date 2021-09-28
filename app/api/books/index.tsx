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
}

export const fetchBooksByCategory = async ({id, page = 1, size = 10}: IGetBooks) => {
  let query = `categoryId=${id}&page=${page}&size=${size}`
  try {
    const res = await fetch(`${baseUrl}/fee-assessment-books?${query}`)
    const data = res.json()
    return data;
  } catch (error) {
    return error;
  }
}