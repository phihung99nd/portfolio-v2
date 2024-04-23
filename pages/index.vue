<script setup lang="ts">
const appConfig = useRuntimeConfig();
</script>

<template>
<main id="index">
  <div class="index-gradient index-gradient__blue"></div>
  <div class="index-gradient index-gradient__green"></div>

  <section class="hero">
    <div class="header font-fira_regular">
      <span>
        Hi, I am
      </span>
      <h1>{{ appConfig?.public?.dev?.engName }}</h1>
      <span class="typer flex">
        >&nbsp;
        <h2 class="anim-typing max-w-fit">{{ appConfig?.public?.dev?.role }}</h2>
      </span>
    </div>
    <div class="intro font-fira_regular">
      <p class="intro-cmt">
        {{appConfig?.public?.dev?.intro}}
      </p>
      <p class="code">
        <span class="code-key"> const </span>
        <span class="code-variable"> intro </span>
        <span class="code-operator"> = </span>
        <span class="code-object">appConfig</span>.<span class="code-object">dev</span>.<span class="code-object">intro</span>;
      </p>
    </div>
  </section>
  <section class="flex flex-col w-full h-full justify-center left-img">
    <img src="/images/Hand%20coding-pana.svg" alt="https://storyset.com/people" class="hidden md:block md:w-[250px] md:h-[250px] lg:w-[400px] lg:h-[400px]"/>
  </section>
</main>
</template>

<style lang="scss" scoped>
#index {
  display: flex;
  height: 100%;
  width: 100%;
  flex: 1 1 auto;
  overflow: hidden;
  padding-left: 300px;

  .hero {
    width: 100%;
    height: 100%;
    justify-content: center;
    display: flex;
    flex-direction: column;

    .header {
      color: #e2e2e2;
      margin-bottom: 2rem;

      span {
        font-size: 1.125rem;
        line-height: 1;
      }

      h1 {
        font-size: 3.5rem;
        line-height: 1;
        padding: 1rem 0;
      }

      .typer {
        font-size: 2rem;
        line-height: 1;
        @apply font-fira_regular text-green-text;
      }
    }

    .intro {
      margin-top: 2rem;

      .intro-cmt {
        color: #6c82a7;
        white-space: pre-wrap;
      }
    }
  }

  .left-img {
    z-index: 11; // higher layer than bg gradient
  }
}

.anim-typing{
  width: fit-content;
  border-right: 3px solid rgba(255,255,255,.75);
  white-space: nowrap;
  overflow: hidden;
  padding-right: 2px;
  animation: typewriter 3.5s steps(40) 1s 1 normal both,
  blinkTextCursor 800ms steps(40) infinite normal;
}

@keyframes typewriter{
  from{width: 0;}
  to{width: 100%;}
}

@keyframes blinkTextCursor{
  from{border-right-color: rgba(255,255,255,.75);}
  to{border-right-color: transparent;}
}

.index-gradient {
  width: 400px;
  height: 400px;
  opacity: 0.5;
  z-index: 10;
  filter: blur(70px);

  &__blue {
    position: fixed;
    bottom: 25%;
    right: 5%;
    border-radius: 0 0 50% 50%;
    rotate: 10deg;
    background: radial-gradient(circle at 50% 50%,rgba(77, 91, 206, 1), rgba(76, 0, 255, 0));

  }

  &__green {
    position: absolute;
    top: 20%;
    right: 30%;
    border-radius: 0 50% 0 50%;
    background: radial-gradient(circle at 50% 50%,rgba(67, 217, 173, 1), rgba(76, 0, 255, 0));
  }
}

@media (max-width: 768px) {
  #index {
    padding-left: 50px;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  #index {
    padding-left: 100px;
  }
}

@media (min-width: 1024px) and (max-width: 1280px) {
  #index {
    padding-left: 125px;
  }
}

@media (min-width: 1280px) {

}
</style>
