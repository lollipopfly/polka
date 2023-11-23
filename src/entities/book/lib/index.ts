import { useTheme } from 'vuetify'
import { ASSETS_PATH, THEME } from '@/shared/config'
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

export const getAuthorsWithComma = (authors: string[] | undefined): string =>
  authors ? authors?.join(', ') : ''

export const getEmptyImage = (): string => {
  const myTheme = useTheme()

  return myTheme.global.name.value === THEME.light
    ? `${ASSETS_PATH}no-photo.png`
    : `${ASSETS_PATH}no-photo-${THEME.dark}.png`
}
