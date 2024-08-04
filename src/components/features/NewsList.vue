<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { CardData } from "../../types";
import { EmitPayload } from "../../types";
import {
  TEXT_COLORS,
  COLORS,
  INIT_PAGE,
  DEFAULT_ADDITIONAL_DATA,
} from "../../constants";

import OrangeButton from "../features/OrangeButton.vue";
import GreenButton from "../features/GreenButton.vue";
import PinkButton from "../features/PinkButton.vue";

import Card from "../ui/Card.vue";
import Input from "../ui/Input.vue";

import { getNewsItem } from "../../api";

import { getRandomNumber, transformNewsItems } from "../../utils";

const newsCard = ref<CardData[]>([]);
const inputQuery = ref<string>("");

const getRandomNewsItem = (payload: EmitPayload) => {
  const randomPageNumber = getRandomNumber();
  getNewsItem(randomPageNumber).then((response) => {
    const transformedCards = transformNewsItems(response, {
      color: COLORS[`${payload.color}`],
      textColor: TEXT_COLORS[`${payload.color}`],
      icon: payload.icon,
      page: randomPageNumber,
    });
    newsCard.value.push(...transformedCards);
  });
};

const handleEmits = (payload: EmitPayload) => {
  getRandomNewsItem(payload);
};

const inputEmit = (payload: string) => {
  inputQuery.value = payload;
};

onMounted(() => {
  getNewsItem().then((response) => {
    const transformedCards = transformNewsItems(response);
    newsCard.value.push(...transformedCards);
  });
});

const newsByPageOrder = computed(() => {
  return newsCard.value.sort((a, b) => {
    if (a.page < b.page) {
      return -1;
    } else {
      return 1;
    }
  });
});

const newsByPageAndInputOrder = computed(() => {
  const orderedNews = newsByPageOrder.value;
  return orderedNews.filter((entity) =>
    entity.shortText.toLowerCase().includes(inputQuery.value.toLowerCase()),
  );
});
</script>

<template>
  <div class="my-[48px] flex flex-col">
    <Input @input="inputEmit" />
    <div
      class="my-[48px] flex h-full w-[1416px] flex-wrap justify-center gap-6"
    >
      <TransitionGroup name="list">
        <Card
          v-for="(newCard, index) in newsByPageAndInputOrder"
          :key="index"
          :datePublish="newCard.datePublish"
          :textColor="newCard.textColor"
          :color="newCard.color"
          :title="newCard.title"
          :image="newCard.image"
          :shortText="newCard.shortText"
          :icon="newCard.icon"
        />
      </TransitionGroup>
    </div>
    <div class="flex justify-center gap-8">
      <green-button @green-submit="handleEmits" />
      <pink-button @pink-submit="handleEmits" />
      <orange-button @orange-submit="handleEmits" />
    </div>
  </div>
</template>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(50px) translateY(50px);
}
</style>
