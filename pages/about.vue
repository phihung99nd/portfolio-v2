<script setup lang="ts">
const sections = useRuntimeConfig().public.dev.about.sections;

const currentSection = ref('expertise-info');

const isActiveSection = computed(() => {
  return (section: string) => currentSection.value == section;
})

const folderNodes = ref([]);
const selectedKey = ref({});
const currentNode = ref({description: ''});
const projectPreviewKey = ref(0);
const openSidebar = ref(false);

const items = ref([]);

onBeforeMount(() => {
  items.value = convertToMobileMenu(sections);
})

onMounted(() => {
  onRefreshFolder();
  document.addEventListener('keydown', navigateByShortcut);
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', navigateByShortcut);
})

/**
 * Navigate folder based on keyboard shortcut
 * @param e: keyboard event
 */
function navigateByShortcut(e: KeyboardEvent) {
  if (e.altKey && Object.values(sections).map((folder: any) => folder.shortcut).includes(e.key)) {
    currentSection.value = Object.values(sections).find((folder: any) => folder.shortcut == e.key)?.title;
    onRefreshFolder();
  }
}

function convertToMobileMenu(sections: any) {
  const arr: any[] = [];
  Object.values(sections).forEach((section: any) => {
    const folder = {
      label: section.title,
      items: (() => {
        let itemArr: any[] = [];
        section.folder.forEach((i: any) => {
          const item = {
            label: i.children ? i.data : i.label,
            items: i.children ? (() => {
              let subItemArr: any[] = [];
              i.children.forEach((c: any) => {
                const subItem = {
                  label: c.label,
                  command: () => {
                    onNodeSelect(c);
                  }
                }
                subItemArr.push(subItem);
              })
              return subItemArr;
            })() : null,
            command: i.children ? null : () => {
              onNodeSelect(i);
            }
          }
          itemArr.push(item)
        })
        return itemArr;
      })()
    }
    arr.push(folder);
  })
  return arr;
}

function onFocusSection(section: any) {
  currentSection.value = section.title;
  onRefreshFolder();
}

function onRefreshFolder() {
  folderNodes.value = sections[currentSection.value]?.folder;
}

function onNodeSelect(node: any) {
  currentNode.value = node;
  projectPreviewKey.value++;
  openSidebar.value = false;
}

function onNodeUnselect() {
  currentNode.value = {};
}

function closeFile() {
  currentNode.value = {};
  selectedKey.value = {};
}
</script>

<template>
  <main class="page">
    <div id="mobile-page-title">
      <Button icon="pi pi-ellipsis-h" class="rounded-full border border-green-text" aria-label="Folder"
              @click="openSidebar = !openSidebar"/>
      _about-me
      <Sidebar v-model:visible="openSidebar" header="Folder" :pt="{
        root: { class: 'bg-dark-bg', style: 'box-shadow: 10px 0 5px -2px rgba(0, 0, 0, 0.35)'},
        title: { class: 'text-gray-text'},
        closeIcon: { class: 'text-gray-text'}
      }">
        <PanelMenu :model="items" multiple class="w-full md:w-20rem" :pt="{
          panel: {class: 'mb-0'},
          headerContent: { class: 'bg-dark-bg'},
          headerLabel: { class: 'text-gray-text'},
          headerAction: { class: 'hover:bg-darken-bg'},
          submenuIcon: { class: 'text-gray-text'},
          headerIcon: { class: 'text-gray-text'},
          menuContent: { class: 'bg-dark-bg'},
          icon: { class: 'text-gray-text'},
          label: { class: 'text-gray-text'},
          content: { class: 'bg-dark-bg'},
          action: { class: 'hover:bg-darken-bg'},
          submenu: { class: 'pl-4'}
        }"/>
      </Sidebar>
    </div>
    <div id="page-menu" class="hidden md:flex shrink-0 w-full h-full">
      <!--  DESKTOP section  -->
      <div class="icon-section flex flex-col h-full">
        <div class="icon-wrapper" v-for="section in sections" :key="section.title"
             :class="{active: isActiveSection(section.title)}">
          <img class="cursor-pointer" v-tooltip.right="`${section.title} (Alt+${section.shortcut})`" :src="section.icon"
               :alt="section.title" @click="onFocusSection(section)"/>
        </div>
      </div>
      <div class="folder-section font-fira_regular flex flex-col grow h-full">
        <div class="text-green-text flex items-center px-4 py-2 border-bot">{{ currentSection }}</div>
        <Tree
            v-model:selectionKeys="selectedKey"
            :value="folderNodes"
            class="min-w-full w-fit"
            selectionMode="single"
            @nodeSelect="onNodeSelect"
            @nodeUnselect="onNodeUnselect"
        ></Tree>
      </div>
    </div>
    <!--  MENU END  -->
    <div
        class="flex flex-col lg:flex-row w-full h-full pb-[100px] lg:pb-0 overflow-x-hidden overflow-y-auto custom-scrollbar lg:overflow-hidden">
      <div id="left" class="w-full lg:w-1/2 h-fit lg:h-full flex flex-col lg:border-right">
        <div class="flex justify-start w-full border-bot" v-if="currentNode?.label">
          <div class="text-green-text max-w-full flex items-center gap-2 border-right px-4 py-2">
            <span class="max-w-[200px] text-ellipsis overflow-hidden">{{ currentNode.label }}</span>
            <i class="pi pi-times text-xs cursor-pointer" @click="closeFile"></i>
          </div>
        </div>
        <div class="w-full h-full pl-3 pr-6 py-3">
          <CommentCode v-if="currentNode.description" :text="currentNode.description"
                       :folder="sections[currentSection].title" :file-key="currentNode.data"/>
        </div>
      </div>
      <div id="right" class="w-full lg:w-1/2 h-fit lg:h-full flex flex-col">
        <div class="hidden lg:flex justify-start w-full border-bot" v-if="currentNode?.label">
          <div class="text-green-text max-w-full flex items-center gap-2 border-right px-4 py-2">
            <span class="max-w-[200px] text-ellipsis overflow-hidden">Preview</span>
          </div>
        </div>
        <div class="w-full h-full pl-3 py-3">
          <LazyProjectPreview v-if="currentNode.description" :tech="currentNode" :key="projectPreviewKey"/>
        </div>
      </div>
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
  // Tree component
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
      width: 100%;

      &:focus {
        > .p-treenode-content {
          outline: none;
        }
      }

      .p-treenode-content {
        width: fit-content;
        min-width: 100%;
      }

      .p-treenode-children {
        width: fit-content;
        min-width: 100%;
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
        width: 100%;

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
