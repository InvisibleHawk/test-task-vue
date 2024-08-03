<script setup lang="ts">
import NewsList from "./components/features/NewsList.vue";
import Input from "./components/ui/Input.vue";
</script>

<template>
  <div class="w-[1416px] max-xl:w-full h-full flex flex-col justify-center">
    <NewsList />
  </div>
</template>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
