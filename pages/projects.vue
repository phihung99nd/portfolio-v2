<script setup lang="ts">
import ProjectCard from "~/components/ProjectCard.vue";

const projects = useRuntimeConfig().public.dev.projects;

const selectedTech = ref([]);
const projectList = ref(Object.values(projects.items));
const openSidebar = ref(false);

const selectedTechLabel = computed(() => {
  if (selectedTech.value.length == 0) {
    return '_all';
  } else {
    return selectedTech.value.map((i: string) => i.toLowerCase()).join("; ");
  }
})

function clearFilter() {
  selectedTech.value = [];
  updateProjectList();
}

function updateProjectList() {
  if(selectedTech.value.length == 0) {
    projectList.value = Object.values(projects.items);
  } else projectList.value = Object.values(projects.items).filter(i => i.tech.some(e => selectedTech.value.includes(e)));
}
</script>

<template>
  <main class="page">
    <div id="mobile-page-title">
      <Button icon="pi pi-ellipsis-h" class="rounded-full border border-green-text" aria-label="Folder"
              @click="openSidebar = !openSidebar"/>
      _projects
      <Sidebar v-model:visible="openSidebar" header="Tech" :pt="{
        root: { class: 'bg-dark-bg', style: 'box-shadow: 10px 0 5px -2px rgba(0, 0, 0, 0.35)'},
        title: { class: 'text-gray-text'},
        closeIcon: { class: 'text-gray-text'}
      }">
        <div v-for="tech of projects.techList" :key="tech"
             class="flex gap-2 px-4 pt-4 text-gray-text align-items-center">
          <Checkbox v-model="selectedTech" @change="updateProjectList" :inputId="tech" name="tech" :value="tech" :pt="{
            box: (options) => ({ class: ['bg-transparent border rounded', {
              'border-gray-text': !options.props.modelValue.includes(options.props.value),
              'border-green-text': options.props.modelValue.includes(options.props.value)
            }],}),
            icon: (options) => ({ class: {
              'text-gray-text': !options.props.modelValue.includes(options.props.value),
              'text-green-text': options.props.modelValue.includes(options.props.value)
            }})
          }"/>
          <label :class="{ 'text-green-text': selectedTech.includes(tech)}" :for="tech">_{{ tech }}</label>
        </div>
      </Sidebar>
    </div>
    <div id="page-menu" class="hidden md:flex shrink-0 w-full h-full">
      <!--   DESKTOP section   -->
      <div class="filter-menu font-fira_regular flex flex-col w-full h-full">
        <div class="text-green-text flex items-center px-4 py-2 border-bot">projects</div>
        <div v-for="tech of projects.techList" :key="tech"
             class="flex gap-2 px-4 pt-4 text-gray-text align-items-center">
          <Checkbox v-model="selectedTech" @change="updateProjectList" :inputId="tech" name="tech" :value="tech" :pt="{
            box: (options) => ({ class: ['bg-transparent border rounded', {
              'border-gray-text': !options.props.modelValue.includes(options.props.value),
              'border-green-text': options.props.modelValue.includes(options.props.value)
            }],}),
            icon: (options) => ({ class: {
              'text-gray-text': !options.props.modelValue.includes(options.props.value),
              'text-green-text': options.props.modelValue.includes(options.props.value)
            }})
          }"/>
          <label :class="{ 'text-green-text': selectedTech.includes(tech)}" :for="tech">_{{ tech }}</label>
        </div>
      </div>
    </div>
    <div class="w-full h-full flex flex-col font-fira_regular overflow-x-hidden overflow-y-auto custom-scrollbar">
      <div class="flex justify-start w-full border-bot">
        <div class="text-green-text max-w-full flex items-center gap-2 border-right px-4 py-2">
          <span class="text-ellipsis overflow-hidden">{{ selectedTechLabel }};</span>
          <i class="pi pi-times text-xs cursor-pointer" @click="clearFilter"></i>
        </div>
      </div>
      <div v-auto-animate class="w-full h-fit md:h-full px-5 md:px-10 lg:px-20 py-3 grid gap-y-3 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:self-center md:overflow-x-hidden md:overflow-y-auto md:custom-scrollbar">
        <ProjectCard v-for="item in projectList" :key="item.title" :project="item"/>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.filter-menu {
  border-right: 1px solid #1d8ad4;
}
</style>
