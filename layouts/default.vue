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
    <TheNavbar class="lg:px-16 md:px-8 px-4 md:py-6 py-4" />
    <TheLeftbar />

    <div class="ml-12 overflow-y-auto">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import TheNavbar from '~/components/global/TheNavbar.vue'
import TheLeftbar from '~/components/global/TheLeftbar.vue'

export default defineComponent({
  head: {
    bodyAttrs: {
      class: 'bg-black',
    },
  },
})
</script>
