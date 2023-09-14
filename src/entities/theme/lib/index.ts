type Itheme = 'light' | 'dark'

export const toggleTheme = (myTheme: any, theme: Itheme): void => {
  myTheme.global.name.value = theme

  localStorage.setItem('theme', theme)
}
