<template>
  <nav class="bg-red-100 flex justify-between">
    <div class="text-bold">
      <nuxt-link to="/" class="group">
        <span class="text-green-500 group-hover:text-green-400">~{</span
        ><span class="text-gray-700 group-hover:text-gray-500"
          >ivan gonzalez</span
        ><span class="text-green-500 group-hover:text-green-400">}</span>
      </nuxt-link>
    </div>
    <div class="flex">
      <nuxt-link to="/blog" class="ml-8 text-gray-700 hover:text-gray-500"
        >blog</nuxt-link
      >
    </div>
  </nav>
</template>
