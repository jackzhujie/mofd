export function debounce<T extends (...args: any[]) => any>(fn: T, wail = 300) {
  let timer:number | null
  return (...args: Parameters<T>): void => {
    if (timer) {
      clearInterval(timer)
    }
    timer = setTimeout(() => {
      fn(args)
    }, wail)
  }
}
