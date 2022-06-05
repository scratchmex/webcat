<template>
  <nav
    class="
      bg-red-100
      flex
      justify-between
      z-50
      transition-transform
      text-sm
      md:text-base
      lg:text-lg
      xl:text-xl
    "
    :class="[{ '-translate-y-full': scrollDirection === 'down' }]"
  >
    <nuxt-link to="/" v-slot="{ isExactActive }">
      <span class="group font-medium">
        <span class="text-green-500 group-hover:text-green-600"
          >~{{ isExactActive ? ':' : '' }}{</span
        ><span
          class="text-gray-700 hover:underline"
          :class="{ underlines: isExactActive }"
          >ivan gonzalez</span
        ><span class="text-green-500 group-hover:text-green-600">}</span>
      </span>
    </nuxt-link>
    <div class="flex">
      <nuxt-link to="/blog" v-slot="{ isExactActive }" class="ml-8">
        <span
          class="text-gray-700 hover:text-green-500 hover:underline"
          :class="{ underline: isExactActive }"
          >blog</span
        >
      </nuxt-link>
    </div>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps<{
  scrollDirection: string,
}>()
</script>
