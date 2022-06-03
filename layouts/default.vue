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

<script setup lang="ts">
import useScrollDirection from '~/utils/useScrollDirection'

const content = ref()
const navbar = ref()
const scrollDirection = useScrollDirection(navbar, content)
</script>

<style>
body {
  @apply bg-black;
}
</style>
