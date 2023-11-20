import type { IBook } from '../index'

export const toggleItemInLocalStorage = (name: string, entity: IBook): IBook[] => {
  const storageStr = localStorage.getItem(name)
  const list = JSON.parse(storageStr || '[]')
  const idIndex = list.findIndex((item: IBook) => item.id === entity.id)

  if (list.length > 0 && idIndex !== -1) {
    list.splice(idIndex, idIndex + 1)
  } else {
    list.push(entity)
  }

  localStorage.setItem(name, JSON.stringify(list))

  return list
}

export const getAuthors = (authors: string[] | undefined): string =>
  authors ? authors?.join(', ') : ''
