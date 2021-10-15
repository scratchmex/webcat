<template>
  <main class="px-4 sm:px-0">
    <BlogPost
      v-for="blogpost in blogposts"
      :post="blogpost"
      :key="blogpost.id"
    />
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import BlogPost from '~/components/blog/BlogPost.vue'

export default defineComponent({
  async asyncData({ $content }) {
    const blogposts = await $content('blog').fetch()

    return {
      blogposts,
    }
  },
})
</script>
