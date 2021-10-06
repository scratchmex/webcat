<template>
  <div class="mx-16">
    <BlogPost
      v-for="blogpost in blogposts"
      :post="blogpost"
      :key="blogpost.id"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

// import BlogPost from '~/components/blog/BlogPost.vue'

import { BlogPostType } from '~/entity/blogpost'

const blogposts: BlogPostType[] = [
  {
    id: 1,
    title: 'This is the title of a blog post',
    date: 'mar 2~oct 2021',
    text: `
  This is the text of the blog post.
  Programmers use a lot of symbols, often encoded with several characters. For the human brain, sequences like ->, <= or := are single logical tokens, even if they take two or three characters on the screen. Your eye spends a non-zero amount of energy to scan, parse and join multiple characters into a single logical one. Ideally, all programming languages should be designed with full-fledged Unicode symbols for operators, but that’s not the case yet.`,
  },
  {
    id: 2,
    title: 'Another blog post',
    date: 'mie 2~oct 2021',
    text: `
    Fira Code is a free monospaced font containing ligatures for common programming multi-character combinations. This is just a font rendering feature: underlying code remains ASCII-compatible. This helps to read and understand code faster. For some frequent sequences like .. or //, ligatures allow us to correct spacing.`,
  },
]

export default defineComponent({
  setup() {
    return {
      blogposts,
    }
  },
})
</script>
