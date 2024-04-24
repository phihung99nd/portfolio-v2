<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    default: ''
  }
})

const root = ref<HTMLElement>(null)
const lines = ref(0);

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
  const textContainer = root.value.querySelector(".text-container");
  const style = window.getComputedStyle(textContainer);
  const fontSize = parseInt(style.fontSize);
  const lineHeight = parseInt(style.lineHeight);
  const maxHeight = textContainer.offsetHeight;
  lines.value = Math.ceil(maxHeight / lineHeight) + 1;
}
</script>

<template>
  <div ref="root" class="code-container flex font-fira_regular text-gray-text">
    <div class="line-numbers md:flex flex-col w-32 hidden">

      <!-- line numbers and asteriscs -->
      <template v-if="lines > 1">
        <div v-for="n in lines" class="grid grid-cols-2 justify-end" :key="n">
          <span class="col-span-1 mr-3">{{ n }}</span>
          <div v-if="n == 1" class="col-span-1 flex justify-center">/**</div>
          <div class="col-span-1 flex justify-center" v-if="n > 1 && n < lines">*</div>
          <div class="col-span-1 flex justify-center pl-2" v-if="n == lines">*/</div>
        </div>
      </template>
    </div>

    <!-- text -->
    <div class="text-container">
      <p v-html="text"></p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.code-container {
  display: flex;
  align-items: flex-start;
}

.line-numbers {
  text-align: right;
}

.text-container {
  width: 100%;
  padding-left: 10px;
  word-wrap: break-word;
}
</style>
