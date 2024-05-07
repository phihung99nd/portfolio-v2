<script setup lang="ts">
const config = useRuntimeConfig();
</script>

<template>
<header id="app-header" class="w-full hidden lg:flex flex-col">
  <nav class="w-full flex justify-between border-bot">
    <div class="flex">
      <NuxtLink id="app-name" to="/">
        {{ config?.public?.dev?.app_name}}
      </NuxtLink>
      <NuxtLink id="nav-link" to="/" exact-active-class="active-link">_home</NuxtLink>
      <NuxtLink id="nav-link" to="/about" exact-active-class="active-link">_about_me</NuxtLink>
      <NuxtLink id="nav-link" to="/projects" exact-active-class="active-link">_projects</NuxtLink>
      <NuxtLink id="nav-link" to="/contact" exact-active-class="active-link">_contact_me</NuxtLink>
    </div>
  </nav>
</header>
</template>

<style lang="scss" scoped>
#app-name {
  border-right: 1px solid #07a787;
  @apply text-gray-text font-fira_regular px-6 py-3 h-full flex items-center;
}
#nav-link {
  border-right: 1px solid #07a787;
  @apply text-gray-text font-fira_regular px-6 py-3 h-full flex items-center transition-ease;

  &:hover {
    @apply bg-hover-bg text-green-text;
  }

  &.active-link {
    @apply text-green-text;
    border-bottom: 0.25rem solid #07a787;
  }
}
</style>
