<script setup lang="ts">
const props = defineProps<{
  direction: 'in' | 'out'
}>()
</script>

<template>
  <div
    class="bg-red-500 w-fit h-fit text-gray-700 border-2 border-current transition ease-in-out duration-200"
    :class="[`pop-${props.direction}-shadow`]"
  >
    <slot />
  </div>
</template>

<style>
.pop-in-shadow {
  box-shadow: 0.25rem 0.25rem;
  @apply -translate-x-1 -translate-y-1;
}

.pop-in-shadow:hover {
  box-shadow: none;
  @apply translate-x-0 translate-y-0;
}

.pop-out-shadow:hover {
  box-shadow: 0.25rem 0.25rem;
  @apply -translate-x-1 -translate-y-1;
}
</style>
