<template>
  <aside
    class="bg-yellow-100 absolute inset-y-0 pt-[4.5rem] flex"
    :class="[side == 'right' ? 'right-0' : 'left-0']"
  >
    <slot />
  </aside>
</template>

<script setup lang="ts">
const props = defineProps<{
  side: 'left' | 'right'
}>()
</script>
