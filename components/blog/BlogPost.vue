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
      <time>{{ post.date }}</time>
    </div>
    <h1>{{ post.title }}</h1>
    <nuxt-content class="text-justify" :document="post" />
    <div class="mt-2">- ivan ♥</div>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

import { BlogPostType } from '~/entity/blogpost'

export default defineComponent({
  props: {
    post: { type: Object as PropType<BlogPostType>, required: true },
  },
})
</script>
