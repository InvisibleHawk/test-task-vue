<script setup lang="ts">
import { onMounted, computed } from "vue";
import { CardProps } from "../../types";
import { MONTH_NAME } from "../../constants";

import Bonus from "../icons/Bonus.vue";
import Fire from "../icons/Fire.vue";
import Pig from "../icons/Pig.vue";

const props = defineProps<CardProps>();

const iconsItem = {
  bonus: Bonus,
  fire: Fire,
  pig: Pig,
};

onMounted(() => {
  console.log(props.color);
});

const getProperlyTitleString = computed(() => {
  let str = props.shortText ? props.shortText : props.title;
  return str;
});

const getProperlyDateString = computed(() => {
  const date = new Date(props.datePublish);
  const day = date.getDay();
  const year = date.getFullYear();

  const monthNumber: string = (date.getMonth() + 1).toString();
  const month = MONTH_NAME[monthNumber];

  return `${day} ${month} ${year}`;
});
</script>

<template>
  <div class="flex flex-col bg-[#F5F5F5] w-[264px] h-[366px] rounded-2xl">
    <img lazy :src="image" class="w-full h-[217px] rounded-t-2xl" />
    <div class="py-[22px] px-[24px] gap-[10px]">
      <div class="h-[69px]">
        <p class="line-clamp-3">{{ getProperlyTitleString }}</p>
      </div>
      <div class="flex justify-between mt-[10px]">
        <Bonus v-if="iconsItem[icon] === Bonus" :fillColor="color" />
        <Pig v-else-if="iconsItem[icon] === Pig" :fillColor="color" />
        <Fire v-else-if="iconsItem[icon] === Fire" :fillColor="color" />
        <p :class="textColor">{{ getProperlyDateString }} г.</p>
      </div>
    </div>
  </div>
</template>
