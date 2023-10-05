import { http } from '@/shared/api'

export const fetchBooks = async (query: string) => {
  return (await http.get(`/volumes?q=${query}`)).data
}
