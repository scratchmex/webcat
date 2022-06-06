<template>
  <div
    class="bg-red-200 h-screen v-screen border-4 border-black rounded-xl overflow-hidden grid grid-flow-col grid-cols-4"
  >
    <TheNavbar />
    <NuxtPage class="col-span-3 bg-green-200 overflow-y-auto scrollbar" />
  </div>
</template>

<style>
body {
  @apply bg-black;
}
</style>
