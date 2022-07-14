<template>
  <div
    class="bg-red-200 h-screen v-screen border-4 border-black rounded-xl overflow-hidden lg:grid lg:grid-flow-col lg:grid-cols-12"
  >
    <TheNavbar class="lg:col-span-2" />
    <NuxtPage class="lg:col-span-10 bg-green-200 overflow-y-auto scrollbar" />
  </div>
</template>

<style>
body {
  @apply bg-black;
}
</style>
