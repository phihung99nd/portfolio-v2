<script setup lang="ts">
import type {ProjectPreviewItemType} from "~/type";
import type {PropType} from "vue";
const props = defineProps({
  item: {
    type: Object as PropType<ProjectPreviewItemType>
  },
  reverse: {
    type: Boolean,
    default: false
  }
});
const openDetail = ref(false);
const projectPreviewItem = ref<HTMLElement>();
let observer: IntersectionObserver;

onMounted(() => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  function handleObserver(entries: any, observer: any) {
    entries.forEach((entry: any) => {
      // If element is in viewport, add the 'show' class to trigger the animation
      if (entry.isIntersecting) {
        projectPreviewItem.value.classList.add('show');
        // observer.unobserve(projectPreviewItem.value) // disable observer once the element has shown
      }
      else {
        projectPreviewItem.value.classList.remove('show');
      }
    });
  }

  observer = new IntersectionObserver(handleObserver, options);

// Start observing the element
  observer.observe(projectPreviewItem.value);
})

onBeforeUnmount(() => {
  observer.unobserve(projectPreviewItem.value)
})

function toggleDetail() {
  openDetail.value = !openDetail.value;
}
</script>

<template>
  <div ref="projectPreviewItem" class="project-preview-item flex flex-col gap-2 mb-4 pr-3" :style="{ '--transition': reverse ? '-50px' : '50px'}">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <Avatar :label="item.shortTitle[0].toUpperCase()" shape="circle"/>
        <div class="flex flex-col">
          <div class="text-sm text-purple-500">{{ item.shortTitle }}</div>
          <div class="text-xs text-gray-text">{{ item.date }}</div>
        </div>
      </div>
      <div class="flex gap-4 items-center">
        <Button class="text-gray-text text-sm hover:text-green-text" icon="pi pi-at" label="Detail" text @click="toggleDetail"/>
        <NuxtLink class="flex items-center" :to="item.demoLink" target="_blank" rel="noopener">
          <Button class="text-gray-text text-sm hover:text-green-text" icon="pi pi-external-link" label="Demo" text/>
        </NuxtLink>
      </div>
    </div>
    <div class="w-full p-3 border border-gray-text rounded-2xl">
      <div class="flex flex-col items-center xl:items-start xl:flex-row gap-2 xl:gap-4">
        <img class="w-full lg:w-2/3 xl:w-1/2 aspect-video object-cover rounded-xl" :src="`/projects/${item.thumbnail}`"
             alt="project-thumbnail"/>
        <div class="flex flex-col gap-2">
          <div class="project-title font-fira_medium text-purple-500">
            {{ item.longTitle }}
          </div>
          <div class="project-tech flex flex-wrap gap-2">
            <div class="w-fit h-fit px-2 py-1 border border-green-text rounded-md text-green-text text-sm" v-for="tech in item.tech" :key="tech">
              {{ tech }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="project-detail flex gap-20 py-2 text-gray-text" :class="{ show: openDetail }">
      <p>{{ item.detail }}</p>
      <Button icon="pi pi-times" text rounded @click="toggleDetail"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-preview-item {
  opacity: 0;
  transform: translateX(var(--transition));
  @apply transition-ease;

  &.show {
    opacity: 1;
    transform: translateX(0);
  }

  .project-detail {
    border-top: 2px solid #6583a150;
    display: none;

    &.show {
      display: flex;
    }
  }
}
</style>
