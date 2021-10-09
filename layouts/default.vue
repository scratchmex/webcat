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
    <TheNavbar class="absolute inset-x-0 lg:px-16 md:px-8 px-4 md:py-6 py-4" />
    <TheLeftbar class="hidden md:flex" />

    <div class="md:ml-12 mt-14 md:mt-[4.5rem] overflow-y-auto">
      <Nuxt />

      <TheFooter class="mt-12" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import TheNavbar from '~/components/global/TheNavbar.vue'
import TheLeftbar from '~/components/global/TheLeftbar.vue'
import TheFooter from '~/components/global/TheFooter.vue'

export default defineComponent({
  head: {
    bodyAttrs: {
      class: 'bg-black',
    },
  },
})
</script>
