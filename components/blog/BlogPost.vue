<template>
  <div class="bg-green-100 md:mt-8 mt-4">
    <div class="text-sm text-right">{{ post.date }}</div>
    <h1 class="font-semibold">{{ post.title }}</h1>
    <p class="mt-4 text-justify">{{ post.text }}</p>
    <div class="mt-2">- ivan ♥</div>
  </div>
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
