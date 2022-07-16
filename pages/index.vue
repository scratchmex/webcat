<script setup lang="ts">
import { Ref } from 'vue'

const { data } = await useAsyncData('home', () =>
  queryContent().where({ _path: '/' }).findOne()
)

async function slide(el: Ref<HTMLElement>) {
  el.value?.classList.add('duration-[15000ms]')
  let cls = ['-translate-x-full']

  while (el.value != undefined) {
    console.log('sliding')

    el.value.classList.add(...cls)
    await new Promise((r) => setTimeout(r, 15000 + 200))

    el.value.classList.remove(...cls)
    await new Promise((r) => setTimeout(r, 15000 + 200))
  }
}

const looping_text_container = ref<HTMLElement>()
onMounted(() => {
  slide(looping_text_container)
})
</script>

<template>
  <main>
    <!-- sliding title -->
    <div
      class="h-[calc(100vh/12)] lg:h-[calc(2*100vh/12)] bg-blue-300 overflow-hidden py-2 flex items-center border-b-2 border-gray-700"
    >
      <div
        ref="looping_text_container"
        class="flex transition-transform ease-linear"
      >
        <!-- TODO: translate-x-full no mueve completamente el contenedor, lo deja a la mitad. En gumroad.com no pasa. -->
        <div v-for="i in 2" class="text-4xl lg:text-8xl shrink-0">
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
