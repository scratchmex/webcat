<template>
  <article
    class="
      bg-green-100
      md:mt-8
      mt-4
      prose prose-sm
      md:prose
      lg:prose-lg
      xl:prose-xl
      mx-auto
    "
  >
    <div class="text-right">
      <time>{{ data.date }}</time>
    </div>
    <h1>{{ data.title }}</h1>
    <ContentRenderer class="text-justify" :value="data" />
    <div class="mt-2">- ivan ♥</div>
  </article>
</template>

<script lang="ts">
import { BlogPostType } from '~/entity/blogpost'

export default defineNuxtComponent({
  props: {
    data: { type: Object as () => BlogPostType, required: true },
  },
})
</script>
