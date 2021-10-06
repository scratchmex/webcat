<template>
  <nav class="bg-red-100 flex justify-between">
    <nuxt-link to="/" v-slot="{ isExactActive, href, navigate }">
      <TheNavbarLink :active="isExactActive" :href="href" @click="navigate">
        <span class="group font-medium">
          <span class="text-green-500 group-hover:text-green-400">~{</span
          ><span class="text-gray-700 group-hover:text-gray-500"
            >ivan gonzalez</span
          ><span class="text-green-500 group-hover:text-green-400">}</span>
        </span>
      </TheNavbarLink>
    </nuxt-link>
    <div class="flex">
      <nuxt-link to="/blog" v-slot="{ isExactActive, href, navigate }">
        <TheNavbarLink
          :active="isExactActive"
          :href="href"
          @click="navigate"
          class="ml-8 text-gray-700 hover:text-gray-500"
          >blog</TheNavbarLink
        >
      </nuxt-link>
    </div>
  </nav>
</template>
