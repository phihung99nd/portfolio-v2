<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Teri Portfolio v2',
  ogTitle: 'Teri Portfolio v2',
  description: 'My portfolio version 2 using NuxtJS',
  ogDescription: 'My portfolio version 2 using NuxtJS',
  ogImage: 'https://phihungtran.vercel.app/images/ogImage.png',
  twitterCard: 'summary_large_image',
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
