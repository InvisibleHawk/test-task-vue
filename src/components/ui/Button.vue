<script setup lang="ts">
import { defineProps, computed } from "vue";
import { Colors } from "../../types";
import { button_colors } from "../../constants";

const props = defineProps<{ colorType: Colors }>();

const bindedStyleBtn = computed(() => {
  return button_colors[props.colorType];
});
</script>

<template>
  <button
    :class="bindedStyleBtn"
    class="text-white rounded-full py-[16px] px-[32px]"
  >
    <div class="flex gap-[10px]">
      <slot name="content"></slot>
      <slot name="icon"></slot>
    </div>
  </button>
</template>
