<script setup lang="ts">
const props = defineProps({
  form: {
    type: Object
  }
});
const root = ref<HTMLElement>();
const lines = ref(0);

onMounted(() => {
  updateLines();
  window.addEventListener("resize", updateLines);
  window.addEventListener("click", updateLines);
  window.addEventListener("input", updateLines);
})

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateLines);
  window.removeEventListener("click", updateLines);
  window.removeEventListener("input", updateLines);
})

function updateLines() {
  const textContainer = root.value.querySelector(".text-container");
  const style = window.getComputedStyle(textContainer);
  const lineHeight = parseInt(style.lineHeight);
  const maxHeight = textContainer.offsetHeight;
  lines.value = Math.ceil(maxHeight / lineHeight);
}
</script>

<template>
  <div ref="root" class="code-container flex font-fira_regular text-gray-text">
    <div class="text-right lg:flex flex-col w-8 shrink-0 hidden mr-3">
      <!-- line numbers and asteriscs -->
      <div v-for="n in lines" class="grid grid-cols-2 justify-end" :key="n">
        <span class="col-span-1 mr-3">{{ n }}</span>
      </div>
    </div>
    <div class="text-container">
      <p class="code">
        <span class="code-key"> const </span><span class="code-variable"> form </span>= <span class="code-object"> reactive</span>({<br/>
        &nbsp;&nbsp;<span class="code-object">name</span><span class="code-operator">:</span>&nbsp;<span class="code-string">"{{form.name}}"</span>,<br/>
        &nbsp;&nbsp;<span class="code-object">email</span><span class="code-operator">:</span>&nbsp;<span class="code-string">"{{form.email}}"</span>,<br/>
        &nbsp;&nbsp;<span class="code-object">message</span><span class="code-operator">:</span>&nbsp;<span class="code-string">"{{form.message}}"</span><br/>
        });<br/><br/>
        <span class="code-key"> function </span><span class="code-function">onSubmit</span>() {<br/>
        &nbsp;&nbsp;<span class="code-object">Email</span>.<span class="code-function">send</span>(<span class="code-variable">form</span>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;.<span class="code-function">then</span>(<span class="code-comment">/* Send reply back to contact */</span>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;.<span class="code-function">catch</span>(<span class="code-comment">/* Inform error */</span>)<br/>
        }

      </p>
    </div>
  </div>
</template>
<style scoped lang="scss">
.code-container {
  width: 100%;
  display: flex;
  align-items: flex-start;
}

.text-container {
  width: 100%;
  .code {
    width: 100%;
    height: fit-content;
    word-wrap: break-word;

    * {
      word-break: break-word;
      word-wrap: break-word;
    }
  }
}
</style>
