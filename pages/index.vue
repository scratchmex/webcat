<script setup lang="ts">
const { data } = await useAsyncData('home', () =>
  queryContent().where({ _path: '/' }).findOne()
)
</script>

<template>
  <main>
    <!-- sliding title -->
    <div
      class="h-[calc(100vh/12)] lg:h-[calc(2*100vh/12)] bg-blue-300 py-2 flex items-center border-b-2 border-gray-700 overflow-x-hidden"
    >
      <div class="inline-flex marquee">
        <div v-for="i in 4" class="text-4xl lg:text-8xl whitespace-nowrap">
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

<style>
.marquee {
  animation: marquee 10s linear infinite;
  will-change: transform;

  @screen lg {
    animation: marquee 15s linear infinite;
  }
}

@keyframes marquee {
  /* from {
    transform: translateX(0%);
  } */

  to {
    transform: translateX(-50%);
  }
}
</style>
