<script setup lang="ts">
import Button from "../ui/Button.vue";
import Fire from "../icons/Fire.vue";
import { EmitPayload } from "../../types";

const emit = defineEmits<{
  (e: "orange-submit", value: EmitPayload): void;
}>();

const handleClick = () => {
  emit("orange-submit", {
    color: "orange",
    icon: "fire",
  });
};
</script>

<template>
  <Button @click="handleClick()" colorType="orange">
    <template v-slot:icon>
      <Fire />
    </template>
    <template v-slot:content> Зарузить </template>
  </Button>
</template>
