<template>
  <aside
    class="bg-yellow-100 absolute inset-y-0 pt-[4.5rem] flex"
    :class="[side == 'right' ? 'right-0' : 'left-0']"
  >
    <slot />
  </aside>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    side: { type: String as PropType<'left' | 'right'>, required: true },
  },
})
</script>
