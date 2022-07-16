<template>
  <div
    class="bg-red-200 h-screen v-screen border-4 border-black rounded-xl overflow-hidden flex flex-col lg:flex-row"
  >
    <TheNavbar class="lg:w-1/5 shrink-0" />
    <NuxtPage class="grow bg-green-200 overflow-y-auto scrollbar" />
  </div>
</template>

<style>
body {
  @apply bg-black;
}
</style>
