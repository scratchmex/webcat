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
  <nav class="bg-purple-200 flex flex-col lg:border-r-2 border-gray-700">
    <!-- logo -->
    <nuxt-link
      to="/"
      v-slot="{ isExactActive }"
      class="bg-yellow-200 h-[calc(100vh/12)] lg:h-[calc(2*100vh/12)] flex items-center text-6xl px-2 group border-b-2 border-gray-700"
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
        class="h-[calc(0.5*100vh/12)] lg:h-[calc(100vh/12)] flex bg-gray-100 items-center px-2 group border-b-2 border-gray-700"
      >
        <span
          class="text-gray-700 group-hover:text-green-500 group-hover:underline"
          :class="{ underline: isExactActive }"
          >{{ link }}</span
        >
      </nuxt-link>
    </ol>

    <!-- social -->
    <ol class="h-[calc(0.5*100vh/12)] lg:h-[calc(100vh/12)] flex bg-gray-700 border-gray-700">
      <a
        v-for="(item, i) in icons"
        :key="i"
        class="grow inline-flex items-center justify-center bg-gray-100 text-gray-700 button-grid pop-out-shadow"
        :href="item.href"
        target="_blank"
      >
        <component :is="item.component" class="w-6" />
      </a>
    </ol>
  </nav>
</template>

<style>
.button-grid {
  @apply border-current;
  @apply border-b-2 border-l-2;
  @apply lg:border-t-2 lg:border-b-0;
  @apply first-of-type:border-l-0;
  @apply hover:border-2;
}

.pop-out-shadow:hover {
  box-shadow: 0.25rem 0.25rem;
  @apply -translate-x-1 -translate-y-1;
  @apply transition ease-in-out duration-200;
}
</style>
