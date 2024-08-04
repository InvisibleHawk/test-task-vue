<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { CardData } from "../../types";
import { EmitPayload, NewsResponseData } from "../../types";
import { TEXT_COLORS, COLORS } from "../../constants";

import OrangeButton from "../features/OrangeButton.vue";
import GreenButton from "../features/GreenButton.vue";
import PinkButton from "../features/PinkButton.vue";

import Card from "../ui/Card.vue";
import Input from "../ui/Input.vue";

import { getNewsItem } from "../../api";

import {
  getRandomNumber,
  transformNewsItems,
  changeColorAndIcon,
  debounce,
} from "../../utils";

const newsCard = ref<CardData[]>([]);
const inputQuery = ref<string>("");

const getRandomNewsItem = (payload: EmitPayload) => {
  const randomPageNumber = getRandomNumber();
  getNewsItem(randomPageNumber).then((response) => {
    if (typeof response === "number") {
      newsCard.value = changeColorAndIcon(newsCard.value, response, payload);
    } else {
      const transformedCards = transformNewsItems(
        response as NewsResponseData,
        {
          color: COLORS[`${payload.color}`],
          textColor: TEXT_COLORS[`${payload.color}`],
          icon: payload.icon,
          page: randomPageNumber,
        },
      );
      newsCard.value.push(...transformedCards);
    }
  });
};

const handleEmits = (payload: EmitPayload) => {
  getRandomNewsItem(payload);
};

const inputEmit = (payload: string) => {
  inputQuery.value = payload;
};

const debouncedInput = debounce(inputEmit, 200);

onMounted(() => {
  getNewsItem().then((response) => {
    if (typeof response === "number") {
      return newsCard.value;
    }
    const transformedCards = transformNewsItems(response as NewsResponseData);
    newsCard.value.push(...transformedCards);
  });
});

const newsByPageOrder = computed(() => {
  return newsCard.value.sort((a, b) => (a.page < b.page ? -1 : 1));
});

const newsByPageAndInputOrder = computed(() => {
  const orderedNews = newsByPageOrder.value;
  return orderedNews.filter((entity) =>
    entity.shortText.toLowerCase().includes(inputQuery.value.toLowerCase()),
  );
});
</script>

<template>
  <div class="my-12 flex w-full flex-col p-[12px] sm:px-0">
    <Input @input="debouncedInput" />
    <div
      class="mb-[24px] mt-[48px] grid grid-cols-2 justify-items-center gap-[12px] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-6"
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
    <div class="flex flex-wrap justify-center gap-[12px] sm:flex-row sm:gap-8">
      <green-button class="flex-1 sm:flex-none" @green-submit="handleEmits" />
      <pink-button class="flex-1 sm:flex-none" @pink-submit="handleEmits" />
      <orange-button class="w-full sm:w-auto" @orange-submit="handleEmits" />
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
  transform: translateX(50px);
}
</style>
