<script setup lang="ts">
const { data } = await useAsyncData('home', () =>
  queryContent().where({ _path: '/' }).findOne()
)
</script>

<template>
  <main class="md:p-8 p-4 flex flex-col-reverse lg:flex-row">
    <div>
      <span class="prose">
        <p class="text-xl">Alo, me llamo</p>
        <h1 class="font-semibold">Ivan Gonzalez.</h1>
        <ContentRenderer :value="data" tag="span" />
      </span>
    </div>
    <div class="grow shrink-0 mb-8 lg:my-auto lg:ml-8">
      <Card direction="in">
        <img
          class="object-none"
          src="https://via.placeholder.com/300"
          alt="foto"
        />
      </Card>
    </div>
  </main>
</template>
