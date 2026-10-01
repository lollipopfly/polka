import axios from 'axios'

export const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-type': 'application/json'
  },
  params: {
    key: import.meta.env.VITE_GOOGLE_BOOKS_API_KEY
  }
})
