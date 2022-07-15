<script setup lang="ts">
import { ref } from 'vue'
import IconGithub from '../icon/IconGithub.vue'
import IconLinkedin from '../icon/IconLinkedin.vue'
import IconStackoverflow from '../icon/IconStackoverflow.vue'
// const props = defineProps<{
//   scrollDirection: string
// }>()

const links = ref(['blog'])

interface SocialLink {
  component // Component
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
    <ol
      class="h-[calc(100vh/12)] flex bg-gray-700 border-gray-700 gap-1 border-y-[0.25rem] lg:border-b-0"
    >
      <a
        v-for="(item, i) in icons"
        :key="i"
        class="grow inline-flex items-center justify-center bg-gray-100 group"
        :href="item.href"
        target="_blank"
      >
        <component :is="item.component" class="w-8 icon-on-hover" />
      </a>
    </ol>
  </nav>
</template>

<style scoped>
.icon-on-hover {
  @apply transform group-hover:-translate-y-1;
  @apply transition-transform duration-200 ease-in;
  @apply group-hover:text-green-500;
  @apply text-gray-700;
}
</style>
