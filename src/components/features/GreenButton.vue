<script setup lang="ts">
import Button from "../ui/Button.vue";
import Pig from "../icons/Pig.vue";
import { EmitPayload } from "../../types";

const emit = defineEmits<{
  (e: "green-submit", value: EmitPayload): void;
}>();

const handleClick = () => {
  emit("green-submit", {
    color: "green",
    icon: "pig",
  });
};
</script>

<template>
  <Button @click="handleClick()" colorType="green">
    <template v-slot:icon>
      <Pig fillColor="white" />
    </template>
    <template v-slot:content> Зарузить </template>
  </Button>
</template>
