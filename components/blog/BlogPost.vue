<template>
  <article
    class="bg-green-100 prose prose-sm md:prose-base lg:prose-lg xl:prose-xl mx-auto"
  >
    <div class="text-right">
      <time>{{ data.date }}</time>
    </div>
    <h1>{{ data.title }}</h1>
    <ContentRenderer class="text-justify" :value="data" />
    <div class="mt-2">- ivan ♥</div>
  </article>
</template>

<script setup lang="ts">
import { ParsedContent } from '@nuxt/content/dist/runtime/types'

const props = defineProps<{
  data: ParsedContent
}>()
</script>
