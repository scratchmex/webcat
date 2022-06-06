<template>
  <main class="p-4 sm:p-0">
    <BlogPost v-for="dat in data" :key="dat.id" :data="dat" />
  </main>
</template>

<script setup lang="ts">
const { data } = await useAsyncData('blog-posts', () =>
  queryContent('/blog').find()
)
</script>
