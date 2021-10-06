<template>
  <div
    class="
      bg-purple-200
      flex flex-col
      h-screen
      v-screenx
      border-4 border-black
      rounded-xl
      overflow-y-auto
    "
  >
    <TheNavbar class="px-16 py-6" />
    <Nuxt class="flex-1" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import TheNavbar from '~/components/global/TheNavbar.vue'

export default defineComponent({
  head: {
    bodyAttrs: {
      class: 'bg-black',
    },
  },
})
</script>
