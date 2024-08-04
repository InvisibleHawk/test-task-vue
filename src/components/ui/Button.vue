<script setup lang="ts">
import { Colors } from "../../types";
import { BUTTON_COLORS } from "../../constants";

const props = defineProps<{ colorType: Colors }>();

const bindedStyleBtn = BUTTON_COLORS[props.colorType];
</script>

<template>
  <button
    :class="bindedStyleBtn"
    class="rounded-full px-[32px] py-[16px] text-white"
  >
    <div class="flex gap-[10px]">
      <slot name="content"></slot>
      <slot name="icon"></slot>
    </div>
  </button>
</template>
