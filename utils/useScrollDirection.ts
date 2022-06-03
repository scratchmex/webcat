import {
  onMounted,
  ref,
  Ref,
  ComponentPublicInstance,
} from 'vue'

export default function useScrollDirection(
  wnavbar: Ref<ComponentPublicInstance>,
  wcontent: Ref<HTMLElement>
) {
  const scrollDirection = ref<'up' | 'down'>()

  onMounted(() => {
    const content = wcontent.value
    const navbar: HTMLElement = wnavbar.value.$el

    let lastScrollTop = window.pageYOffset || content.scrollTop
    let ticking = false

    function updateScrollDir() {
      let st = window.pageYOffset || content.scrollTop

      // navbar offset
      if (st <= navbar.offsetHeight) scrollDirection.value = undefined
      // downscroll code
      else if (st > lastScrollTop) scrollDirection.value = 'down'
      // upscroll code
      else if (st < lastScrollTop) scrollDirection.value = 'up'

      lastScrollTop = st <= 0 ? 0 : st // For Mobile or negative scrolling
      ticking = false
    }

    function handleScroll() {
      if (ticking) return

      ticking = true
      window.requestAnimationFrame(updateScrollDir)
    }

    // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    // or window.addEventListener("scroll"....
    content.addEventListener('scroll', handleScroll, false)
  })

  return scrollDirection
}
