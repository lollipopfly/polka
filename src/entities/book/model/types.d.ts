export interface IBookModel {
  queryBooks: books_v1.Schema$Volume[]
  book: IBook
  favorites: IBook[]
  bookshelf: IBook[]
}

export interface IBook {
  id?: string | null
  title?: string
  image?: string
  description?: string
  authors?: string[]
}
