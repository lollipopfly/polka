import { defineStore } from 'pinia'
import { books_v1 } from '@googleapis/books/v1'
import { BookApi } from '../index'

interface IBookStore {
  queryBooks: books_v1.Schema$Volume[]
  book: books_v1.Schema$Volume | null
}

export const useBookStore = defineStore({
  id: 'book',

  state: () =>
    <IBookStore>{
      queryBooks: [],
      book: {}
    },

  actions: {
    async fetchBooks(payload: string): Promise<void> {
      const { items } = await BookApi.fetchBooks(payload)

      this.updateQueryBooks(items)
    },

    async fetchBookById(id: string): Promise<any> {
      try {
        const result = await BookApi.fetchBookById(id)

        this.updateBook(result)

        return { result, error: null }
      } catch (error) {
        return { result: null, error }
      }
    },

    updateQueryBooks(payload: books_v1.Schema$Volume[]): void {
      this.queryBooks = payload || []
    },

    updateBook(payload: books_v1.Schema$Volume): void {
      this.book = payload
    }
  }
})
