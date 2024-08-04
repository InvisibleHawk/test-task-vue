<script setup lang="ts">
import { ref } from "vue";

const inputQuery = ref<string>("");

const emit = defineEmits<{
  (e: "input", value: string): void;
}>();

const handleInputChangeEvent = (e: Event) => {
  let str = (e.target as HTMLInputElement).value;
  emit("input", str);
};
</script>

<template>
  <div class="flex justify-center">
    <input
      @input="handleInputChangeEvent"
      :value="inputQuery"
      type="text"
      placeholder="Поиск"
      class="block h-[45px] w-full rounded-xl border-2 border-[#4D4D4D] px-[18px] py-4 font-medium focus:border-[#4D4D4D]"
    />
  </div>
</template>

<style scoped>
input[type="text"] {
  background-image: url("../../assets/find.png");
  background-position: 99% 8px;
  background-repeat: no-repeat;
}
</style>
