<script setup lang="ts">
const sections = useRuntimeConfig().public.dev.about.sections;

const currentSection = ref('expertise-info');

const isActiveSection = computed(() => {
  return (section: string) => currentSection.value == section;
})

const folderNodes = ref([]);
const selectedKey = ref({});
const currentNode = ref({ description: ''});

onMounted(() => {
  onRefreshFolder();
})

function onFocusSection(section: any) {
  currentSection.value = section.title;
  onRefreshFolder();
}

function onRefreshFolder() {
  folderNodes.value = sections[currentSection.value]?.folder;
}

function onNodeSelect(node: any) {
  currentNode.value = node;
}
</script>

<template>
  <main class="page">
    <div id="mobile-page-title">
      _about-me
    </div>
    <div id="page-menu" class="flex shrink-0 w-full h-full">
      <!--  DESKTOP section  -->
      <div class="icon-section flex flex-col h-full">
        <div class="icon-wrapper" v-for="section in sections" :key="section.title"
             :class="{active: isActiveSection(section.title)}">
          <img class="cursor-pointer" :src="section.icon" :alt="section.title" @click="onFocusSection(section)"/>
        </div>
      </div>
      <div class="folder-section font-fira_regular flex flex-col grow h-full">
        <div class="text-green-text flex items-center px-4 py-2 border-bot">{{currentSection}}</div>
        <Tree
            v-model:selectionKeys="selectedKey"
            :value="folderNodes"
            class="min-w-full w-fit"
            selectionMode="single"
            @nodeSelect="onNodeSelect"
        ></Tree>
      </div>
    </div>
<!--  MENU END  -->
    <div class="flex flex-col lg:grid lg:grid-cols-2 w-full h-full">
      <div id="left" class="w-full flex flex-col border-right">
        <div class="w-full h-full pl-5 pr-10 lg:py-5  ">
          <CommentCode :text="currentNode.description" />
        </div>
      </div>
      <div id="right" class="w-full flex flex-col"></div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.icon-section {
  width: 4rem;
  border-right: 1px solid #1d8ad4;

  > .icon-wrapper {
    @apply flex justify-center items-center w-full py-3;

    > img {
      width: 1.5rem;
      opacity: 0.5;
    }

    &.active {
      > img {
        opacity: 1;
      }
    }
  }
}

.folder-section {
  border-right: 1px solid #1d8ad4;
  max-width: calc(275px - 4rem);
}

// Custom preset
:deep() {
  .p-tree {
    background: transparent;
    padding: 0;
    height: stretch;
    @apply font-fira_regular text-gray-text py-2 w-full;

    .p-tree-wrapper {
      height: 100%;

      .p-tree-container {
        height: 100%;
        scrollbar-width: thin;
        scrollbar-color: #455c8575 transparent;
      }
    }

    .p-treenode-label {
      text-wrap: nowrap;
    }

    .p-treenode-children {
      padding-left: 1rem;
    }

    .p-treenode {
      &:focus {
        > .p-treenode-content {
          outline: none;
        }
      }

      .p-treenode-content.p-highlight {
        @apply text-gray-text bg-transparent;
        border-radius: 0;
      }

      .p-treenode-content.p-treenode-selectable:not(.p-highlight):hover {
        @apply text-gray-text bg-transparent;
        border-radius: 0;
      }

      &.p-treenode-leaf {
        .p-treenode-icon {
          margin-right: 0;
        }

        .p-treenode-content.p-highlight {
          @apply text-green-text bg-hover-bg;
          border-radius: 0;
        }

        .p-treenode-content.p-treenode-selectable:not(.p-highlight):hover {
          @apply text-green-text bg-hover-bg;
          border-radius: 0;
        }
      }
    }
  }
}
</style>
