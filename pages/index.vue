<script setup lang="ts">
const { data } = await useAsyncData('home', () =>
  queryContent().where({ _path: '/' }).findOne()
)
</script>

<template>
  <main class="md:p-8 p-4">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h2 class="py-4 text-xl">Alo, me llamo</h2>
        <h1 class="font-semibold text-4xl">Ivan Gonzalez.</h1>
      </div>
      <img class="order-first md:order-none" src="" alt="foto" />
    </div>
    <div class="prose mt-8">
      <ContentRenderer :value="data" />
    </div>
  </main>
</template>
