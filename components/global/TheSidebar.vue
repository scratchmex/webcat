<template>
  <aside
    class="bg-yellow-100 absolute inset-y-0 pt-[4.5rem] flex"
    :class="[side == 'right' ? 'right-0' : 'left-0']"
  >
    <slot />
  </aside>
</template>

<script lang="ts">

export default defineNuxtComponent({
  props: {
    side: { type: String as () => 'left' | 'right', required: true },
  },
})
</script>
