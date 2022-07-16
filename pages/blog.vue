<script setup lang="ts">
const { data } = await useAsyncData('blog-posts', () =>
  queryContent('/blog').find()
)
data.value = data.value.concat(data.value).concat(data.value).concat(data.value)
// TODO: remove ^^, make each blog post component, link each card to its post and define if description is worth
</script>
<template>
  <main
    class="p-4 grid md:grid-cols-2 xl:grid-cols-3 grid-flow-row-dense gap-8"
  >
    <Card
      direction="in"
      v-for="(d, i) in data"
      class="w-full xmax-w-[calc(100vw/5)] mt-4 group"
      :class="{ 'mt-16': i % 4 == 1, 'mt-36': i % 4 == 2, 'mt-28': i % 4 == 3 }"
    >
      <img
        class="object-fill w-full"
        src="https://via.placeholder.com/300"
        alt="foto"
      />
      <div
        class="bg-blue-400 absolute inset-x-0 bottom-0 px-1 bg-opacity-60 max-h-full overflow-hidden border-y-2 border-current text-gray-700"
      >
        <!-- overflow-hidden transition-all h-auto max-h-0 group-hover:max-h-screen ease-in-out duration-200 -->
        <!-- inset-x-0 bottom-0 overflow-hidden transition-all h-0 group-hover:h-1/2 -->
        <div>{{ d.title }}</div>
        <div
          class="hidden group-hover:block border-t-2 border-current mt-2 pt-2"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </Card>
    <!-- <BlogPost v-for="d in data" :key="d.id" :data="d" /> -->
  </main>
</template>
