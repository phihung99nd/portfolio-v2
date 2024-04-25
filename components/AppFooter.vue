<script setup lang="ts">
const social = useRuntimeConfig().public.dev.contact.social
</script>

<template>
  <footer class="flex border-top text-gray-text font-fira_regular">
    <div class="w-full flex flex-wrap justify-start md:justify-between">
      <div id="social-footer" class="flex justify-start">
        <span id="social-title" class="h-full flex justify-center items-center grow responsive-text-sm border-right px-4 py-2">
          hit me up:
        </span>
        <div id="social-icon" class="flex">
          <NuxtLink :to="social.facebook.url" target="_blank" class="border-right">
            <img src="/icons/social/facebook.svg"/>
          </NuxtLink>
          <NuxtLink :to="social.github.url" target="_blank" class="border-right">
            <img src="/icons/social/github.svg"/>
          </NuxtLink>
        </div>
      </div>
      <div class="flex justify-start md:justify-end border-top md:border-none responsive-text-sm grow">
        <span id="attribute-title" class="h-full flex justify-center items-center px-2 py-2">
          Attribute:
        </span>
        <div class="flex flex-wrap">
          <NuxtLink title="People illustrations by Storyset" to="https://storyset.com/people" target="_blank"
                    class="flex justify-center items-center px-2 py-2">
            Storyset
          </NuxtLink>
          <NuxtLink title="The Next-Gen UI Suite for Vue.js" to="https://primevue.org/nuxt" target="_blank"
                    class="flex justify-center items-center px-2 py-2">
            PrimeVue
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
#social-icon {
  > a {
    @apply flex justify-center items-center min-w-[36px] md:min-w-[54px] px-2 py-1 md:px-4 md:py-2 transition-ease;

    > img {
      @apply max-w-[28px] md:max-w-full;
      opacity: 0.5;
    }

    &:hover {
      @apply bg-hover-bg;
      color: white;

      > img {
        opacity: 1;
      }
    }
  }
}
</style>
