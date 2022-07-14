<script setup lang="ts">
import { Component, ref } from 'vue'
import IconGithub from '../icon/IconGithub.vue'
import IconLinkedin from '../icon/IconLinkedin.vue'
import IconStackoverflow from '../icon/IconStackoverflow.vue'
// const props = defineProps<{
//   scrollDirection: string
// }>()

const links = ref(['blog', 'proyectos'])

interface SocialLink {
  component: Component
  href: string
}
const icons: SocialLink[] = [
  {
    component: IconGithub,
    href: 'https://github.com/scratchmex',
  },
  {
    component: IconLinkedin,
    href: 'https://www.linkedin.com/in/ivangonzalez1107',
  },
  {
    component: IconStackoverflow,
    href: 'https://stackoverflow.com/users/6697020/ivan-gonzalez',
  },
]
</script>

<template>
  <nav class="bg-purple-200 flex flex-col">
    <!-- logo -->
    <nuxt-link
      to="/"
      v-slot="{ isExactActive }"
      class="bg-yellow-200 h-[calc(2*100vh/12)] flex items-center text-6xl px-4 group"
    >
      <span
        class="text-green-500 group-hover:text-green-600"
        v-show="isExactActive"
        >~</span
      ><span
        class="text-gray-700 group-hover:underline"
        :class="{ underlines: isExactActive }"
        >ig</span
      >
    </nuxt-link>

    <!-- sections -->
    <ol class="grow flex flex-col">
      <nuxt-link
        v-for="link in links"
        :key="link"
        :to="`/${link}`"
        v-slot="{ isExactActive }"
        class="h-[calc(100vh/12)] flex bg-gray-100 items-center px-4 group"
      >
        <span
          class="text-gray-700 group-hover:text-green-500 group-hover:underline"
          :class="{ underline: isExactActive }"
          >{{ link }}</span
        >
      </nuxt-link>
    </ol>

    <!-- social -->
    <ol class="h-[calc(100vh/12)] bg-gray-100 flex">
      <a
        v-for="(item, i) in icons"
        :key="i"
        class="grow icon-on-hover inline-flex items-center justify-center"
        :href="item.href"
        target="_blank"
      >
        <component :is="item.component" class="w-8" />
      </a>
    </ol>
  </nav>
</template>

<style scoped>
.icon-on-hover {
  @apply transform hover:-translate-y-1;
  @apply transition-transform duration-200 ease-in;
  @apply hover:text-green-500;
  @apply text-gray-700;
}
</style>
