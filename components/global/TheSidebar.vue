<template>
  <div
    class="bg-yellow-100 fixed top-[3.75rem] md:top-[4.75rem] bottom-1 flex"
    :class="[
      side == 'right' ? 'right-1 rounded-br-xl' : 'left-1 rounded-bl-xl',
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    side: { type: String as PropType<'left' | 'right'>, required: true },
  },
})
</script>
