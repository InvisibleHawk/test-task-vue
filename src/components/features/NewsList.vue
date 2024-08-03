<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { CardData, Colors, PagesNum } from "../../types";
import { EmitPayload } from "../../types";
import { TEXT_COLORS, COLORS, INIT_PAGE } from "../../constants";

import OrangeButton from "../features/OrangeButton.vue";
import GreenButton from "../features/GreenButton.vue";
import PinkButton from "../features/PinkButton.vue";

import Card from "../ui/Card.vue";
import Input from "../ui/Input.vue";

import { getNewsItem } from "../../api";

import { getRandomNumber } from "../../utils";

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
      entity.page = randomPageNumber;
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
      entity.page = INIT_PAGE;
      return entity;
    });

    newsCard.value.push(...mutatedNews);
  });
});

const filteredNews = computed(() => {
  return newsCard.value.sort((a, b) => {
    if (a.page < b.page) {
      return -1;
    } else {
      return 1;
    }
  });
});
</script>

<template>
  <div class="flex flex-wrap justify-center gap-6 my-[48px]">
    <Input />
    <TransitionGroup name="list">
      <Card
        v-for="(newCard, index) in filteredNews"
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
</template>
