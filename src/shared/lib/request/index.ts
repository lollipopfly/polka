let timeout: ReturnType<typeof setTimeout> | null = null

export const debounce = (func: Function, delay: number): void => {
  if (timeout !== null) {
    clearTimeout(timeout)
  }

  timeout = setTimeout((): void => {
    func()
  }, delay)
}
