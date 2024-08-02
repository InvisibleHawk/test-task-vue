<script setup lang="ts">
import { defineProps, withDefaults } from "vue";

interface Props {
  fillColor: string;
}

const props = withDefaults(defineProps<Props>(), {
  fillColor: "black",
});
</script>

<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    :fill="fillColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.94922 10.3783C1.94922 5.72309 5.72304 1.94926 10.3783 1.94926C15.0335 1.94926 18.8074 5.72309 18.8074 10.3783C18.8074 15.0336 15.0335 18.8074 10.3783 18.8074C5.72304 18.8074 1.94922 15.0336 1.94922 10.3783ZM10.3783 4.25039C6.99392 4.25039 4.25035 6.99397 4.25035 10.3783C4.25035 13.7627 6.99392 16.5063 10.3783 16.5063C13.7627 16.5063 16.5062 13.7627 16.5062 10.3783C16.5062 6.99397 13.7627 4.25039 10.3783 4.25039Z"
      :fill="fillColor"
    />
    <path
      d="M17.1955 17.1956C17.6448 16.7462 18.3733 16.7462 18.8226 17.1956L21.7137 20.0866C22.163 20.5359 22.163 21.2644 21.7137 21.7137C21.2644 22.1631 20.5359 22.1631 20.0865 21.7137L17.1955 18.8227C16.7462 18.3734 16.7462 17.6449 17.1955 17.1956Z"
      :fill="fillColor"
    />
  </svg>
</template>
