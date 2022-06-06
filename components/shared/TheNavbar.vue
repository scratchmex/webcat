<template>
  <nav
    class="col-span-1 bg-purple-200 grid grid-flow-row grid-rows-12 auto-rows-fr"
  >
    <!-- logo -->
    <nuxt-link
      to="/"
      v-slot="{ isExactActive }"
      class="bg-yellow-200 row-span-2 inline-flex items-center text-6xl px-4"
    >
      <span class="group">
        <span
          class="text-green-500 group-hover:text-green-600"
          v-show="isExactActive"
          >~</span
        ><span
          class="text-gray-700 group-hover:underline"
          :class="{ underlines: isExactActive }"
          >ig</span
        >
      </span>
    </nuxt-link>

    <!-- sections -->
    <nuxt-link
      v-for="link in links"
      :key="link"
      :to="`/${link}`"
      v-slot="{ isExactActive }"
      class="bg-gray-100 inline-flex items-center px-4 group"
    >
      <span
        class="text-gray-700 group-hover:text-green-500 group-hover:underline"
        :class="{ underline: isExactActive }"
        >{{ link }}</span
      >
    </nuxt-link>

    <!-- social -->
    <div class="bg-gray-100 row-start-[12] inline-flex">
      <div
        v-for="i in 3"
        :key="i"
        class="grow inline-flex items-center justify-center"
      >
        icon {{ i }}
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// const props = defineProps<{
//   scrollDirection: string
// }>()

const links = ref(['blog'])
</script>
