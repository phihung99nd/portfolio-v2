<script setup lang="ts">
const props = defineProps({
  tech: {
    type: Object
  }
})

</script>

<template>
  <div class="w-full h-full lg:pb-[100px] flex flex-col font-fira_regular lg:overflow-x-hidden lg:overflow-y-auto lg:custom-scrollbar">
    <div class="text-gray-text mb-2">
      // Project Showcase
    </div>
    <ProjectPreviewItem v-for="item in tech.projects" :key="item.id" :item="item"/>
  </div>
</template>

<style scoped lang="scss">

</style>
