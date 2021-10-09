<template>
  <nav
    class="bg-red-100 flex justify-between z-50 transition-transform"
    :class="[{ '-translate-y-full': scrollDirection === 'down' }]"
  >
    <nuxt-link to="/" v-slot="{ isExactActive, href, navigate }" custom>
      <a :href="href" @click="navigate">
        <span class="group font-medium">
          <span class="text-green-500 group-hover:text-green-600"
            >~{{ isExactActive ? ':' : '' }}{</span
          ><span
            class="text-gray-700 hover:underline"
            :class="{ underlines: isExactActive }"
            >ivan gonzalez</span
          ><span class="text-green-500 group-hover:text-green-600">}</span>
        </span>
      </a>
    </nuxt-link>
    <div class="flex">
      <nuxt-link to="/blog" v-slot="{ isExactActive, href, navigate }" custom>
        <a
          :href="href"
          @click="navigate"
          class="ml-8 text-gray-700 hover:text-green-500 hover:underline"
          :class="{ underline: isExactActive }"
          >blog</a
        >
      </nuxt-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    scrollDirection: String,
  },
})
</script>
