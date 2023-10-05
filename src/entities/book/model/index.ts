import { defineStore } from 'pinia'
import { BookApi } from '../index'

interface IBookStore {
  books: any[]
}

export const useBookStore = defineStore({
  id: 'book',

  state: () =>
    <IBookStore>{
      books: []
    },

  actions: {
    async fetchBooks(): Promise<void> {
      const test: any[] = await BookApi.fetchBooks('Война+и+мир')
      this.books = test
    }
  }
})
