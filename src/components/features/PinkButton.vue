<script setup lang="ts">
import Button from "../ui/Button.vue";
import Bonus from "../icons/Bonus.vue";
import { EmitPayload } from "../../types";

const emit = defineEmits<{
  (e: "pink-submit", value: EmitPayload): void;
}>();

const handleClick = () => {
  emit("pink-submit", {
    color: "pink",
    icon: "bonus",
  });
};
</script>

<template>
  <Button @click="handleClick" colorType="pink">
    <template v-slot:icon>
      <Bonus />
    </template>
    <template v-slot:content> Зарузить </template>
  </Button>
</template>
