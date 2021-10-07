<template>
  <TheSidebar class="w-12" side="left">
    <ul class="flex-1 flex flex-col items-center justify-end">
      <li class="on-hover my-4">
        <a href="https://github.com/scratchmex" target="_blank">
          <IconGithub class="w-6" />
        </a>
      </li>
      <VerticalLine />
      <li class="on-hover my-4">
        <a
          href="https://stackoverflow.com/users/6697020/ivan-gonzalez"
          target="_blank"
        >
          <IconStackoverflow class="w-6" />
        </a>
      </li>
      <VerticalLine />
      <li class="on-hover my-4">
        <a
          href="https://www.linkedin.com/in/ivangonzalez1107"
          target="_blank"
        >
          <IconLinkedin class="w-6" />
        </a>
      </li>
      <VerticalLine />
    </ul>
  </TheSidebar>
</template>

<style scoped>
.on-hover {
  @apply transform hover:-translate-y-1;
  @apply transition-transform duration-200 ease-in;
  @apply hover:text-green-500;
  @apply text-gray-700;
}
</style>
