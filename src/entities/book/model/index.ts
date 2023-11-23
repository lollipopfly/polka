import { defineStore } from 'pinia'
import { books_v1 } from '@googleapis/books/v1'
import {
  BookApi,
  toggleItemInLocalStorage,
  FAVORITES_STORAGE_NAME,
  BOOKSHELF_STORAGE_NAME
} from '../index'
import type { IBookModel, IBook } from './types'

export const useBookModel = defineStore({
  id: 'book',

  state: () =>
    <IBookModel>{
      queryBooks: [],
      book: {},
      favorites: JSON.parse(localStorage.getItem(FAVORITES_STORAGE_NAME) || '[]'),
      bookshelf: JSON.parse(localStorage.getItem(BOOKSHELF_STORAGE_NAME) || '[]')
    },

  getters: {
    isBookInFavorites() {
      return (id: string | undefined | null): boolean =>
        this.favorites.some((item: IBook) => item.id === id)
    },

    isBookInBookshelf() {
      return (id: string | undefined | null): boolean =>
        this.bookshelf.some((item: IBook) => item.id === id)
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
      const favoriteList = toggleItemInLocalStorage(FAVORITES_STORAGE_NAME, book)

      this.updateFavorites(favoriteList)
    },

    toggleBookshelfBook(book: IBook): void {
      const bookShelfList = toggleItemInLocalStorage(BOOKSHELF_STORAGE_NAME, book)

      this.updateBookShelf(bookShelfList)
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
    },

    updateBookShelf(payload: IBook[]): void {
      this.bookshelf = [...payload]
    }
  }
})
