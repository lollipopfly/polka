import { http } from '@/shared/api'

export const fetchBooks = async (query: string) => {
  return (await http.get(`/volumes?q=intitle:${query}`)).data
}

export const fetchBookById = async (id: string) => {
  return (await http.get(`/volumes/${id}`)).data
}
