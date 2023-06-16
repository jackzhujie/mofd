function debounce<T extends (...args: any[]) => any>(fn: T, wail = 300) {
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

export function isElementInViewport (element: string | HTMLElement, container: string | HTMLElement) {
  let elementDom, containerDom
  if (typeof element === 'string') {
    elementDom = document.getElementById(element)
  } else {
    elementDom = element
  }
  if (typeof container === 'string') {
    containerDom = document.getElementById(container)
  } else {
    containerDom = container
  }
  if (elementDom && containerDom) {
    const elementRect = elementDom.getBoundingClientRect()
    const containerRect = containerDom.getBoundingClientRect()

    return (
      elementRect.top >= containerRect.top &&
      elementRect.left >= containerRect.left &&
      elementRect.bottom <= containerRect.bottom &&
      elementRect.right <= containerRect.right
    )
  } else {
    throw Error('参数有误！')
  }
}

export default {
  debounce,
  isElementInViewport
}
