<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col justify-between w-full h-full">
    <MobileMenu/>
    <AppHeader/>
    <div class="w-full h-full">
      <slot/>
    </div>
    <AppFooter/>
  </div>
</template>

<style scoped>

</style>
