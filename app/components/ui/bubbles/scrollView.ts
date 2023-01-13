export const scrollView = (bubble: any, block: any, setIsMenu: any) => {
  bubble.addEventListener('click', () => {
    if (window.innerWidth <= 900) {
      setIsMenu(false)
    }
    block.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    })
  })
}
