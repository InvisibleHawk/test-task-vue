<script setup lang="ts">
import { Colors } from "../../types";
import { BUTTON_COLORS } from "../../constants";

const props = defineProps<{ colorType: Colors }>();

const bindedStyleBtn = BUTTON_COLORS[props.colorType];
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
