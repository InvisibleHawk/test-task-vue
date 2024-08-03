<script setup lang="ts">
import { ref, onMounted } from "vue";
import { CardData, Colors, PagesNum } from "./types";
import { EmitPayload } from "./types";
import {
  PINK_COLOR,
  GREEN_COLOR,
  ORANGE_COLOR,
  TEXT_COLORS,
  COLORS,
} from "./constants";

import OrangeButton from "./components/features/OrangeButton.vue";
import GreenButton from "./components/features/GreenButton.vue";
import PinkButton from "./components/features/PinkButton.vue";

import Bonus from "./components/icons/Bonus.vue";
import Fire from "./components/icons/Fire.vue";
import Pig from "./components/icons/Pig.vue";

import Card from "./components/ui/Card.vue";
import Input from "./components/ui/Input.vue";

import { getNewsItem } from "./api";

import { getRandomNumber } from "./utils";

const newsCard = ref<CardData[]>([]);

const getRandomNewsItem = (payload: EmitPayload) => {
  const randomPageNumber = getRandomNumber();
  console.log(randomPageNumber);
  getNewsItem(randomPageNumber).then((response) => {
    const { news } = response.data;
    const mutatedNews: CardData[] = news.map((entity: CardData): CardData => {
      const { color, icon } = payload;
      entity.textColor = TEXT_COLORS[`${color}`];
      entity.icon = icon;
      entity.color = COLORS[`${color}`];
      return entity;
    });
    newsCard.value.push(...mutatedNews);
  });
};

const handleEmits = (payload: EmitPayload) => {
  getRandomNewsItem(payload);
  console.log(newsCard.value);
};

onMounted(() => {
  getNewsItem().then((response) => {
    const { news } = response.data;
    const mutatedNews: CardData[] = news.map((entity: CardData): CardData => {
      entity.textColor = TEXT_COLORS.green;
      entity.icon = "pig";
      entity.color = COLORS["green"];
      return entity;
    });

    newsCard.value.push(...mutatedNews);
  });
});
</script>

<template>
  <div class="w-full h-full">
    <div class="w-[1416px] flex flex-wrap gap-6 my-[48px]">
      <Input />
      <TransitionGroup name="list">
        <Card
          v-for="(newCard, index) in newsCard"
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
      <div class="flex justify-center w-full gap-8">
        <green-button @green-submit="handleEmits" />
        <pink-button @pink-submit="handleEmits" />
        <orange-button @orange-submit="handleEmits" />
      </div>
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
  transform: translateY(30px);
}
</style>
