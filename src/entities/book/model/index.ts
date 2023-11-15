import { defineStore } from 'pinia'
import { books_v1 } from '@googleapis/books/v1'
import { BookApi } from '../index'
import type { IBookStore, IBook } from './types'

export const useBookStore = defineStore({
  id: 'book',

  state: () =>
    <IBookStore>{
      queryBooks: [],
      book: {},
      favorites: JSON.parse(localStorage.getItem('book-favorites') || '[]')
    },

  getters: {
    isBookInFavorites() {
      return (id: string | undefined | null) => this.favorites.some((item: IBook) => item.id === id)
    }
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

    toggleFavoriteBook(book: IBook): void {
      const favorites = localStorage.getItem('book-favorites')
      const favoriteList = JSON.parse(favorites || '[]')
      const idIndex = favoriteList.findIndex((item: IBook) => item.id === book.id)

      if (favoriteList.length > 0 && idIndex !== -1) {
        favoriteList.splice(idIndex, idIndex + 1)
      } else {
        favoriteList.push(book)
      }

      localStorage.setItem('book-favorites', JSON.stringify(favoriteList))
      this.updateFavorites(favoriteList)
    },

    updateQueryBooks(payload: books_v1.Schema$Volume[]): void {
      this.queryBooks = [...payload] || []
    },

    updateBook(payload: books_v1.Schema$Volume): void {
      const { volumeInfo } = payload
      const book: IBook = {
        id: payload.id,
        title: volumeInfo?.title,
        image: volumeInfo?.imageLinks?.thumbnail,
        description: volumeInfo?.description,
        authors: volumeInfo?.authors || []
      }

      this.book = { ...book }
    },

    updateFavorites(payload: IBook[]): void {
      this.favorites = [...payload]
    }
  }
})
