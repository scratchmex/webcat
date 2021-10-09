import { onMounted, ref, Ref } from '@vue/composition-api'

export default function useScrollDirection(welement: Ref<HTMLElement>) {
  const scrollDirection = ref<'up' | 'down'>()

  onMounted(() => {
    const element = welement.value

    let lastScrollTop = window.pageYOffset || element.scrollTop
    let ticking = false

    function updateScrollDir() {
      let st = window.pageYOffset || element.scrollTop

      if (st > lastScrollTop) {
        // downscroll code
        scrollDirection.value = 'down'
        console.log('down')
      } else {
        // upscroll code
        scrollDirection.value = 'up'
        console.log('up')
      }

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
    element.addEventListener('scroll', handleScroll, false)
  })

  return scrollDirection
}
