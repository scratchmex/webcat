import { Ref, ref } from 'vue'

export function useCollapsibleHeight(
  el: Ref<HTMLElement>,
  { default_state = true }
) {
  const show = ref(true)
  const toggle = () => (show.value = !show.value)
  const close = () => (show.value = false)
  const open = () => (show.value = true)

  watch(show, () => {
    el.value.style.height = show.value
      ? el.value.scrollHeight.toString() + 'px'
      : '0px'
  })

  // collapse if js is enabled and default is false
  onMounted(() => (show.value = default_state))

  return {
    show,
    toggle,
    close,
    open,
  }
}

export function useCollapsibleMaxHeight(
  el: Ref<HTMLElement>,
  { default_state = true }
) {
  const show = ref(true)
  const toggle = () => (show.value = !show.value)
  const close = () => (show.value = false)
  const open = () => (show.value = true)

  watch(show, () => {
    el.value.style.maxHeight = show.value ? '100vh' : '0px'
  })

  // collapse if js is enabled
  onMounted(() => (show.value = default_state))

  return {
    show,
    toggle,
    close,
    open,
  }
}
