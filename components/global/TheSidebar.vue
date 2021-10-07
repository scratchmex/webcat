<template>
  <div
    class="bg-yellow-100 absolute top-14 md:top-[4.5rem] bottom-0 flex"
    :class="[
      side == 'right' ? 'right-0 rounded-br-xl' : 'left-0 rounded-bl-xl',
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
