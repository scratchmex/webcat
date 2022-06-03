<template>
  <ul
    class="flex items-center justify-center"
    :class="[orientation == 'vertical' ? 'flex-col' : '']"
  >
    <li class="on-hover" :class="[orientation == 'vertical' ? 'my-4' : 'mx-4']">
      <a href="https://github.com/scratchmex" target="_blank">
        <IconGithub class="w-6" />
      </a>
    </li>
    <VerticalLine />
    <li class="on-hover" :class="[orientation == 'vertical' ? 'my-4' : 'mx-4']">
      <a
        href="https://stackoverflow.com/users/6697020/ivan-gonzalez"
        target="_blank"
      >
        <IconStackoverflow class="w-6" />
      </a>
    </li>
    <VerticalLine />
    <li class="on-hover" :class="[orientation == 'vertical' ? 'my-4' : 'mx-4']">
      <a href="https://www.linkedin.com/in/ivangonzalez1107" target="_blank">
        <IconLinkedin class="w-6" />
      </a>
    </li>
    <VerticalLine :class="[{ hidden: orientation === 'horizontal' }]" />
  </ul>
</template>

<script setup lang="ts">
const props = defineProps<{
  orientation: 'vertical' | 'horizontal'
}>()
</script>

<style scoped>
.on-hover {
  @apply transform hover:-translate-y-1;
  @apply transition-transform duration-200 ease-in;
  @apply hover:text-green-500;
  @apply text-gray-700;
}
</style>
