<template>
  <div
    class="
      relative
      bg-purple-200
      flex flex-col
      h-screen
      v-screenx
      border-4 border-black
      rounded-xl
      overflow-hidden
    "
  >
    <TheNavbar
      ref="navbar"
      class="absolute inset-x-0 md:px-8 px-4 md:py-6 py-4"
      :scrollDirection="scrollDirection"
    />
    <TheLeftbar class="hidden md:flex" />

    <div
      ref="content"
      class="md:pl-12 pt-[3.25rem] md:pt-[4.5rem] overflow-y-auto scrollbar"
    >
      <slot />
      <TheFooter class="mt-12" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue'
import TheNavbar from '~/components/global/TheNavbar.vue'
import TheLeftbar from '~/components/global/TheLeftbar.vue'
import TheFooter from '~/components/global/TheFooter.vue'
import useScrollDirection from '~/utils/useScrollDirection'

export default defineComponent({
  head: {
    bodyAttrs: {
      class: 'bg-black',
    },
  },
  setup() {
    const content = ref()
    const navbar = ref()
    const scrollDirection = useScrollDirection(navbar, content)

    return {
      content,
      navbar,
      scrollDirection,
    }
  },
})
</script>
