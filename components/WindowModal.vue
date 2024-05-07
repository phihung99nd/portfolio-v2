<script setup lang="ts">
const props = defineProps({
  header: {
    type: String,
    default: ''
  }
})
const visible = defineModel('visible', { default: false })

const fs = ref(false);

function closeModal() {
  visible.value = false;
}

function toggleFullscreen() {
  fs.value = !fs.value;
}
</script>

<template>
<div class="fixed w-full h-full z-20 top-0 left-0 bg-darken-bg bg-opacity-50" :class="{ hidden: !visible}">
  <div id="window" class="font-fira_regular flex flex-col w-[90%] md:w-2/3 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] border border-green-text bg-darken-bg rounded"
       :class="{ fullscreen: fs }">
    <div id="window-header" class="px-2 py-2 flex justify-between items-center border-bot">
      <div class="text-gray-text text-[14px]">{{ header }}</div>
      <div class="flex grow justify-end items-center gap-1">
        <i class="pi pi-minus text-[8px] text-white p-1 border border-white hover:bg-gray-600 rounded-full cursor-pointer" @click="closeModal"></i>
        <i class="pi pi-clone text-[8px] text-white p-1 border border-white hover:bg-gray-600 rotate-[-90deg] rounded-full cursor-pointer" @click="toggleFullscreen"></i>
        <i class="pi pi-times text-[8px] text-white p-1 border border-red-700 bg-red-700 hover:border-red-600 hover:bg-red-600 rounded-full cursor-pointer" @click="closeModal"></i>
      </div>
    </div>
    <div id="window-content" class="px-4 py-4 h-fit overflow-x-hidden overflow-y-auto custom-scrollbar">
      <slot>
        <div class="flex justify-center items-center">
          <img src="/images/empty%20data.svg" alt="empty-data" class="w-full md:w-2/3 lg:w-1/2 object-cover"/>
        </div>
      </slot>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
#window {
  @apply transition-ease;

  #window-content {
    max-height: calc(100vh - 68px); // modal bg padding: 15px * 2, modal header: line height 21px + padding 8px * 2 + border 1px
  }

  &.fullscreen {
    width: calc(100% - 30px) !important;
    height: calc(100% - 30px) !important;

    #window-content {
      height: stretch !important;
    }
  }
}
</style>
