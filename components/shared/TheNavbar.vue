<script setup lang="ts">
import { ref } from 'vue'
import {
  useCollapsibleHeight,
  useCollapsibleMaxHeight,
} from '~~/utils/useCollapsibleHeight'
import { ScrollDirection } from '~~/utils/useScrollDirection'
import IconGithub from '../icon/IconGithub.vue'
import IconLinkedin from '../icon/IconLinkedin.vue'
import IconStackoverflow from '../icon/IconStackoverflow.vue'

const props = defineProps<{
  scrollDirection: ScrollDirection
}>()

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

const navbar_mobile_dropdown = ref<HTMLElement>()
const mobile_navbar = ref<HTMLElement>()

const {
  show: isMenuExpanded,
  toggle: toggleMenu,
  close: closeMenu,
} = useCollapsibleHeight(navbar_mobile_dropdown, {
  default_state: false,
})

const { close: hideNavbar, open: showNavbar } = useCollapsibleHeight(
  mobile_navbar,
  {
    default_state: true,
  }
)

watch(
  () => props.scrollDirection,
  () => {
    if (props.scrollDirection == ScrollDirection.down) {
      hideNavbar()
      closeMenu()
    } else if (props.scrollDirection == ScrollDirection.up) showNavbar()
  }
)
</script>

<template>
  <!-- desktop navbar -->
  <nav
    :="$attrs"
    class="bg-purple-200 hidden lg:flex w-1/5 shrink-0 flex-col border-r-2 border-gray-700"
  >
    <!-- top bar (logo) -->
    <div
      class="bg-yellow-200 h-[calc(2*100vh/12)] flex items-center justify-between px-2 border-b-2 border-gray-700"
    >
      <!-- logo -->
      <nuxt-link to="/" v-slot="{ isExactActive }" class="text-6xl group">
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
    </div>

    <!-- sections -->
    <ol class="grow flex flex-col">
      <nuxt-link
        v-for="link in links"
        :key="link"
        :to="`/${link}`"
        v-slot="{ isExactActive }"
        class="h-[calc(100vh/12)] flex bg-gray-100 items-center px-2 group border-b-2 border-gray-700"
      >
        <span
          class="text-gray-700 group-hover:text-green-500 group-hover:underline"
          :class="{ underline: isExactActive }"
          >{{ link }}</span
        >
      </nuxt-link>
    </ol>

    <!-- social -->
    <ol class="h-[calc(100vh/12)] flex bg-gray-700 border-gray-700">
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

  <!-- mobile navbar -->
  <nav :="$attrs" class="flex lg:hidden flex-col">
    <!-- top bar (logo) -->
    <div
      ref="mobile_navbar"
      class="bg-yellow-200 overflow-hidden transition-[max-height,height]"
    >
      <div class="flex items-center justify-between border-b-2 border-gray-700">
        <!-- logo -->
        <nuxt-link
          @click="closeMenu"
          to="/"
          v-slot="{ isExactActive }"
          class="text-5xl group grow p-2"
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

        <!-- hamburger menu -->
        <div class="p-4 mr-2 cursor-pointer" @click="toggleMenu">
          <div
            class="h-[2px] w-8 my-2 bg-gray-700 transition-transform"
            :class="{ 'rotate-45 translate-y-[5px]': isMenuExpanded }"
          ></div>
          <div
            class="h-[2px] w-8 my-2 bg-gray-700 transition-transform"
            :class="{ '-rotate-45 -translate-y-[5px]': isMenuExpanded }"
          ></div>
        </div>
      </div>
    </div>

    <!-- dropdown bar -->
    <div
      ref="navbar_mobile_dropdown"
      class="bg-gray-100 overflow-hidden transition-[max-height,height]"
    >
      <!-- sections -->
      <ol class="grow flex flex-col">
        <nuxt-link
          @click="closeMenu"
          v-for="link in links"
          :key="link"
          :to="`/${link}`"
          v-slot="{ isExactActive }"
          class="h-[calc(0.5*100vh/12)] flex bg-gray-100 items-center px-2 group border-b-2 border-gray-700"
        >
          <span
            class="text-gray-700 group-hover:text-green-500 group-hover:underline"
            :class="{ underline: isExactActive }"
            >{{ link }}</span
          >
        </nuxt-link>
      </ol>

      <!-- social -->
      <ol class="h-[calc(0.5*100vh/12)] flex bg-gray-700 border-gray-700">
        <a
          v-for="(item, i) in icons"
          :key="i"
          class="grow inline-flex items-center justify-center bg-gray-100 text-gray-700 button-grid pop-out-shadow"
          :href="item.href"
          target="_blank"
        >
          <component :is="item.component" class="w-5" />
        </a>
      </ol>
    </div>
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
