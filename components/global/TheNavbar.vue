<template>
  <nav class="bg-red-100 flex justify-between">
    <nuxt-link to="/" v-slot="{ isExactActive, href, navigate }" custom>
      <a :href="href" @click="navigate">
        <span class="group font-medium">
          <span class="text-green-500 group-hover:text-green-400"
            >~{{ isExactActive ? ':' : '' }}{</span
          ><span
            class="text-gray-700 group-hover:text-gray-500"
            :class="{ underlines: isExactActive }"
            >ivan gonzalez</span
          ><span class="text-green-500 group-hover:text-green-400">}</span>
        </span>
      </a>
    </nuxt-link>
    <div class="flex">
      <nuxt-link to="/blog" v-slot="{ isExactActive, href, navigate }" custom>
        <a
          :href="href"
          @click="navigate"
          class="ml-8 text-gray-700 hover:text-gray-500"
          :class="{ underline: isExactActive }"
          >blog</a
        >
      </nuxt-link>
    </div>
  </nav>
</template>
