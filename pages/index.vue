<script setup lang="ts">
import { Ref } from 'vue'

const { data } = await useAsyncData('home', () =>
  queryContent().where({ _path: '/' }).findOne()
)

async function initSlide(el: Ref<HTMLElement>) {
  let right = true
  let timeoutid

  const toggle = () => {
    el.value.style.transform = right
      ? 'translateX(calc(-100% + 100vw))'
      : 'translateX(0)'

    right = !right

    timeoutid = setTimeout(() => toggle(), 15000 + 100)
  }

  onMounted(() => {
    el.value.classList.add('duration-[15000ms]')

    setTimeout(() => toggle(), 10)
  })

  onUnmounted(() => {
    clearTimeout(timeoutid)
  })
}

const looping_text_container = ref<HTMLElement>()
initSlide(looping_text_container)
</script>

<template>
  <main>
    <!-- sliding title -->
    <div
      class="h-[calc(100vh/12)] lg:h-[calc(2*100vh/12)] bg-blue-300 py-2 flex items-center border-b-2 border-gray-700"
    >
      <div
        ref="looping_text_container"
        class="shrink-0 flex transition-transform ease-linear"
      >
        <div v-for="i in 2" class="text-4xl lg:text-8xl">
          <span class="mr-8">•</span>
          <span class="mr-8">Aló, me llamo Ivan González</span>
        </div>
      </div>
    </div>
    <!-- content -->
    <section class="md:p-8 p-4 flex flex-col-reverse lg:flex-row">
      <!-- text -->
      <div class="prose">
        <!-- <p class="text-xl">Alo, me llamo</p>
          <h1 class="font-semibold">Ivan Gonzalez.</h1> -->
        <ContentRenderer :value="data" tag="span" />
      </div>
      <!-- image -->
      <div class="grow shrink-0 mb-4 lg:my-auto lg:ml-8">
        <Card direction="in">
          <img
            class="object-none"
            src="https://via.placeholder.com/300"
            alt="foto"
          />
        </Card>
      </div>
    </section>
  </main>
</template>
