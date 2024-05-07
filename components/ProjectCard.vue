<script setup lang="ts">
const props = defineProps({
  project: {
    type: Object
  }
})

const detailDlg = ref(false);

function showProjectDetail() {
  detailDlg.value = true;
}
</script>

<template>
  <div id="project" class="lg:mx-5">
    <span id="project-title" class="flex text-sm my-3">
      <h3 class="text-purple-500 font-fira_bold mr-3">{{ project.title }}</h3>
      <h4 class="font-fira_regular text-gray-text"> // _{{project.tag}}</h4>
    </span>

    <div id="project-card" class="flex flex-col">
      <div id="thumbnail">
        <img id="thumbnail-img" :src="`/projects/${project.img}`" alt="project-thumbnail"/>
        <div class="absolute top-2 right-2 flex gap-1">
          <div class="px-1.5 py-1 text-[0.75rem] text-white leading-none rounded shadow bg-green-text" v-for="tech in project.tech">{{ tech }}</div>
        </div>
      </div>
      <div class="pb-8 pt-6 px-6">
        <div class="text-gray-text font-fira_regular text-sm mb-5 line-clamp-2" v-html="project.detail.description"></div>
        <a id="view-button" target="_blank" class="text-white font-fira_regular py-2 px-4 w-fit text-xs border border-green-text rounded-lg hover:bg-green-text transition-ease cursor-pointer"
           @click="showProjectDetail">
          view-project
        </a>
      </div>
    </div>
    <WindowModal v-model:visible="detailDlg" header="Window title">
      <div class="w-full flex flex-col md:flex-row gap-10">
        <img class="w-full md:w-1/2 max-w-[400px]" :src="`/projects/${project.img}`"  alt="project-thumbnail"/>
        <div class="flex flex-col grow">
          <div class="text-gray-text">// {{project.title}}</div>
          <p class="code">
            <span class="code-key"> const </span>
            <span class="code-variable"> date </span>
            <span class="code-operator"> = </span>
            <span class="code-string">"{{project.detail.date}}"</span>;
          </p>
          <p class="code">
            <span class="code-key"> const </span>
            <span class="code-variable"> members </span>
            <span class="code-operator"> = </span>
            <span class="code-string">"{{project.detail.members}}"</span>;
          </p>
          <p class="code">
            <span class="code-key"> const </span>
            <span class="code-variable"> responsibility </span>
            <span class="code-operator"> = </span>
            <span class="code-string">"{{project.detail.responsibility}}"</span>;
          </p>
        </div>
      </div>
      <div class="w-full">
        <div class="my-5 font-fira_bold text-white text-xl">Description</div>
        <div class="text-gray-text" v-html="project.detail.description"></div>
      </div>
    </WindowModal>
  </div>
</template>

<style scoped lang="scss">
#project {
  margin-bottom: 5px;
}

#project-card {
  border: 1px solid #1E2D3D;
  background-color: #011221;
  border-radius: 15px;
  max-width: 400px;

  #thumbnail {
     height: 120px;
    position: relative;
    overflow: hidden;

    #thumbnail-img {
      width: 100%;
      border-top-right-radius: 15px;
      border-top-left-radius: 15px;
    }
  }
}
</style>
