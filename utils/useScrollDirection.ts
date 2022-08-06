import { onMounted, ref, Ref } from 'vue'

export enum ScrollDirection {
  up = 'up',
  down = 'down',
  undefined = 'undefined',
}

export default function useScrollDirection(content: Ref<HTMLElement>) {
  const scrollDirection = ref<ScrollDirection>(ScrollDirection.undefined)

  const getScrolled = () => window.scrollY || content.value.scrollTop

  onMounted(() => {
    let lastScrollTop = getScrolled()
    let ticking = false

    function updateScrollDir() {
      let st = getScrolled()
      let newValue: ScrollDirection

      // downscroll code
      if (st > lastScrollTop) newValue = ScrollDirection.down
      // upscroll code
      else if (st < lastScrollTop) newValue = ScrollDirection.up

      if (newValue && scrollDirection.value != newValue)
        scrollDirection.value = newValue

      lastScrollTop = Math.max(st, 0) // For Mobile or negative scrolling
      ticking = false
    }

    function handleScroll() {
      if (ticking) return

      ticking = true
      window.requestAnimationFrame(updateScrollDir)
    }

    // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    // or window.addEventListener("scroll"....
    content.value.addEventListener('scroll', handleScroll, false)
  })

  return scrollDirection
}
