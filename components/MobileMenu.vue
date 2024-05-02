<script setup lang="ts">
const config = useRuntimeConfig();

const menuOpen = ref(false);

function toggleMobileMenu() {
  menuOpen.value = !menuOpen.value;

  const menu = document.getElementById('menu');
  menu.classList.toggle('show')

  const page = document.getElementsByTagName('main')[0];
  // Hide / show section
  if (page.style.display === 'none') {
    page.style.display = 'flex';
  } else {
    page.style.display = 'none';
  }
}
</script>

<template>
<div id="mobile-menu" class="w-full z-10 lg:hidden">
<!-- App name -->
  <div id="mobile-header" class="w-full h-16 flex justify-between items-center border-bot">
    <NuxtLink id="app-name" class="text-menu-text font-fira_regular text-gray-text flex h-full items-center mx-5" to="/">
      {{ config?.public?.dev?.app_name}}
    </NuxtLink>
    <img src="/icons/bento-menu.svg" v-if="!menuOpen" @click="toggleMobileMenu()" class="w-8 h-8 mx-5 my-auto cursor-pointer"/>
    <img src="/icons/bento-menu-close.svg" v-else @click="toggleMobileMenu()" class="w-7 h-7 mx-6 my-auto cursor-pointer"/>
  </div>

<!-- Toggle menu -->
  <div id="menu" class="z-10">
    <NuxtLink id="nav-link-mobile" to="/" exact-active-class="active-link" @click="toggleMobileMenu()">
      _hello
    </NuxtLink>

    <NuxtLink id="nav-link-mobile" to="/about" exact-active-class="active-link" @click="toggleMobileMenu()">
      _about-me
    </NuxtLink>

    <NuxtLink id="nav-link-mobile" to="/projects" exact-active-class="active-link" @click="toggleMobileMenu()">
      _projects
    </NuxtLink>

    <NuxtLink id="nav-link-mobile" to="/contact" exact-active-class="active-link" @click="toggleMobileMenu()">
      _contact-me
    </NuxtLink>
  </div>
</div>
</template>

<style scoped lang="scss">
#menu {
  opacity: 0;
  height: 0;
  user-select: none;
  pointer-events: none;
  transition: all 0.5s ease;

  * {
    user-select: none;
    pointer-events: none;
  }

  &.show {
    opacity: 1;
    height: auto;
    user-select: auto;
    pointer-events: auto;

    * {
      user-select: auto;
      pointer-events: auto;
    }
  }

  a {
    opacity: 0;
    transform: translateY(20px);
    transition: transform 0.5s ease, opacity 0.5s ease;
  }

  &.show a {
    opacity: 1;
    transform: translateY(0);
  }

  #nav-link-mobile {
    border-bottom: 1px solid #1E2D3D;
    @apply text-gray-text font-fira_regular px-6 py-4 flex items-center;

    &:nth-of-type(2) {
      transition-delay: 0.1s;
    }

    &:nth-of-type(3) {
      transition-delay: 0.2s;
    }

    &:nth-of-type(4) {
      transition-delay: 0.3s;
    }
  }

  #nav-link-mobile.active-link {
    @apply text-green-text;
  }
}
</style>
