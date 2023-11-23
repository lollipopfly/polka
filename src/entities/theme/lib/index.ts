import type { ITheme } from '@/shared/config'

export const toggleTheme = (myTheme: any, theme: ITheme): void => {
  myTheme.global.name.value = theme

  localStorage.setItem('theme', theme)
}
