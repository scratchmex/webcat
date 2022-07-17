<script setup lang="ts">
import useScrollDirection from '~/utils/useScrollDirection'

const content = ref<HTMLElement>()
const scrollDirection = useScrollDirection(content)
</script>

<template>
  <div
    class="bg-red-200 h-screen v-screen border-4 border-black rounded-xl overflow-hidden flex flex-col lg:flex-row"
  >
    <TheNavbar :scrollDirection="scrollDirection" class="lg:w-1/5 shrink-0" />
    <main ref="content" class="grow bg-green-200 overflow-y-auto scrollbar">
      <NuxtPage />
    </main>
  </div>
</template>

<style>
body {
  @apply bg-black;
}
</style>
