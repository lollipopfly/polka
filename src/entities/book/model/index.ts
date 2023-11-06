import { defineStore } from 'pinia'
import { BookApi } from '../index'
import { books_v1 } from '@googleapis/books/v1'

interface IBookStore {
  books: books_v1.Schema$Volume[]
}

export const useBookStore = defineStore({
  id: 'book',

  state: () =>
    <IBookStore>{
      books: []
    },

  actions: {
    async fetchBooks(payload: string): Promise<void> {
      const { items } = await BookApi.fetchBooks(payload)

      this.updateBooks(items)
    },

    updateBooks(payload: books_v1.Schema$Volume[]): void {
      this.books = payload
    }
  }
})
