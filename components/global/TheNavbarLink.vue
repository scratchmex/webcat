<template>
  <a v-on="$listeners" :class="{ underline: active }">
    <slot></slot>
    <!-- <div v-if="active">-------------</div> -->
  </a>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    active: Boolean,
  },
})
</script>
