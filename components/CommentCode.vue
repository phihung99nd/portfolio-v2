<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  section: {
    type: String,
    default: 'section'
  },
  fileKey: {
    type: String,
    default: 'file'
  }
})

const root = ref<HTMLElement>(null)
const lines = ref(0);
const codeLines = ref(0);

onMounted(() => {
  updateLines();
  window.addEventListener("resize", updateLines);
  window.addEventListener("click", updateLines);
})

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateLines);
  window.removeEventListener("click", updateLines);
})

function updateLines() {
  const textContainer = root.value.querySelector(".comment");
  const style = window.getComputedStyle(textContainer);
  const lineHeight = parseInt(style.lineHeight);
  const maxHeight = textContainer.offsetHeight;
  lines.value = Math.ceil(maxHeight / lineHeight) + 1;
  const codeContainer = root.value.querySelector(".code");
  const codeStyle = window.getComputedStyle(codeContainer);
  const codeLineHeight = parseInt(codeStyle.lineHeight);
  const codeMaxHeight = codeContainer.offsetHeight;
  codeLines.value = Math.ceil(codeMaxHeight / codeLineHeight);
}
</script>

<template>
  <div ref="root" class="code-container flex font-fira_regular text-gray-text">
    <div class="line-numbers md:flex flex-col w-8 hidden mr-3">

      <!-- line numbers and asteriscs -->
      <div v-for="n in lines" class="grid grid-cols-1 justify-end" :key="n">
        <span class="col-span-1">{{ n }}</span>
      </div>
      <div class="grid grid-cols-1 justify-end" v-if="lines > 1">
        <span class="col-span-1">{{ lines + 1 }}</span>
      </div>
      <template v-else>
        <div class="grid grid-cols-1 justify-end">
          <span class="col-span-1">{{ lines + 1 }}</span>
        </div>
        <div v-for="code in codeLines" :key="code" class="grid grid-cols-1 justify-end">
          <span class="col-span-1">{{ lines + 1 + code }}</span>
        </div>
      </template>
    </div>

    <!-- text -->
    <div class="text-container">
      <div class="flex w-full">
        <div class="text-right flex flex-col w-fit">
          <div v-for="n in lines" class="grid grid-cols-1 justify-end" :key="n">
            <div v-if="n == 1" class="col-span-1 flex justify-center">/**</div>
            <div class="col-span-1 flex justify-center" v-if="n > 1 && n < lines">*</div>
            <div class="col-span-1 flex justify-center pl-2" v-if="n == lines">*/</div>
          </div>
        </div>
        <p class="comment" v-html="text"></p>
      </div>
      <p class="code">
        <span class="code-key"> const </span>
        <span class="code-variable"> description </span>
        <span class="code-operator"> = </span>
        <span class="code-object">{{ section }}</span>.<span class="code-object">{{ fileKey }}</span>.<span
          class="code-object">description</span>;
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.code-container {
  display: flex;
  align-items: flex-start;
}

.text-container {
  width: 100%;
  padding-left: 10px;
  word-wrap: break-word;

  .comment {
    width: 100%;
    height: fit-content;
    padding-left: 10px;
    word-wrap: break-word;
  }
}
</style>
