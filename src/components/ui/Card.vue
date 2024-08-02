<script setup lang="ts">
import { defineProps, onMounted, computed } from "vue";
import { CardProps } from "../../types";

const props = defineProps<CardProps>();

onMounted(() => {
  console.log(props.image);
});

const getProperlyString = computed(() => {
  let str = props.shortText ? props.shortText : props.title;

  return str.length < 60 ? str : str.slice(0, 60) + "...";
});
</script>

<template>
  <div class="flex flex-col bg-[#F5F5F5] w-[264px] h-[366px] rounded-2xl">
    <img lazy :src="image" class="w-full h-[217px] rounded-t-2xl" />
    <div class="py-[22px] px-[24px] gap-[10px]">
      <p>{{ getProperlyString }}</p>
      <div class="flex justify-between mt-[10px]">
        <slot name="icon"></slot>
        <p class="text-[#378B60]">{{ datePublish }}</p>
      </div>
    </div>
  </div>
</template>
