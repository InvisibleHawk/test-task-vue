<script setup lang="ts">
import NewsList from "./components/features/NewsList.vue";
import { useFetchNews } from "./components/composables/useFetchNews";
import { onMounted } from "vue";

onMounted(() => {});
</script>

<template>
  <div class="flex flex-col justify-center max-xl:w-full">
    <NewsList />
  </div>
</template>
