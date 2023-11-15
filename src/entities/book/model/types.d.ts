export interface IBookStore {
  queryBooks: books_v1.Schema$Volume[]
  book: IBook
  favorites: IBook[]
}

export interface IBook {
  id?: string | null
  title?: string
  image?: string
  description?: string
  authors?: string[]
}
