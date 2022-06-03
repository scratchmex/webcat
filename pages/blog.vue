<template>
  <main class="px-4 sm:px-0">
    <BlogPost v-for="dat in data" :data="dat" :key="dat.id" />
  </main>
</template>

<script setup lang="ts">
const { data } = await useAsyncData('blog-posts', () =>
  queryContent('/blog').find()
)
</script>
