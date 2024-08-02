<script setup lang="ts">
import { ref, onMounted } from "vue";
import { CardData } from "./types";

import Button from "./components/ui/Button.vue";
import Pig from "./components/icons/Pig.vue";
import Fire from "./components/icons/Fire.vue";
import Find from "./components/icons/Find.vue";
import Bonus from "./components/icons/Bonus.vue";
import Card from "./components/ui/Card.vue";
import Input from "./components/ui/Input.vue";

const newsCard = ref<CardData[] | []>([]);

const getPost = async () => {
  try {
    const data = await fetch("https://domotekhnika.ru/api/v1/news?page=7");
    const jsonData = await data.json();
    return jsonData;
  } catch (err) {
    console.log(err);
  }
};

onMounted(() => {
  getPost().then((response) => {
    const { data } = response;
    newsCard.value = data.news;
  });
});
</script>

<template>
  <div class="w-full h-full">
    <div class="w-[1416px] flex flex-wrap gap-6">
      <Input />
      <Card
        v-for="(newCard, index) in newsCard"
        :key="index"
        :datePublish="newCard.datePublish"
        :title="newCard.title"
        :image="newCard.image"
        :shortText="newCard.shortText"
      >
        <template v-slot:icon>
          <Bonus fillColor="#378B60" />
        </template>
      </Card>
      <Button colorType="green">
        <template v-slot:icon>
          <Pig />
        </template>
        <template v-slot:content> Зарузить </template>
      </Button>
      <Button colorType="pink">
        <template v-slot:icon>
          <Bonus />
        </template>
        <template v-slot:content> Зарузить </template>
      </Button>
      <Button colorType="orange">
        <template v-slot:icon>
          <Fire />
        </template>
        <template v-slot:content> Зарузить </template>
      </Button>
    </div>
  </div>
</template>
