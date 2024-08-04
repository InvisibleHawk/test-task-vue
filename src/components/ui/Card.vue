<script setup lang="ts">
import { onMounted, computed } from "vue";
import { CardProps } from "../../types";
import { MONTH_NAME } from "../../constants";

import Bonus from "../icons/Bonus.vue";
import Fire from "../icons/Fire.vue";
import Pig from "../icons/Pig.vue";

const props = defineProps<CardProps>();

const iconsItem: Record<string, object> = {
  bonus: Bonus,
  fire: Fire,
  pig: Pig,
};

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
  <div
    class="flex h-[366px] w-[210px] flex-col rounded-2xl bg-[#F5F5F5] lg:w-[231px] xl:w-[264px]"
  >
    <img
      lazy
      :src="image"
      class="h-[217px] w-full rounded-t-2xl object-cover"
    />
    <div class="gap-[10px] px-[24px] py-[22px]">
      <div class="h-[69px]">
        <p class="line-clamp-3">{{ getProperlyTitleString }}</p>
      </div>
      <div class="mt-[10px] flex justify-between">
        <Bonus v-if="iconsItem[icon] === Bonus" :fillColor="color" />
        <Pig v-else-if="iconsItem[icon] === Pig" :fillColor="color" />
        <Fire v-else-if="iconsItem[icon] === Fire" :fillColor="color" />
        <p :class="textColor">{{ getProperlyDateString }} г.</p>
      </div>
    </div>
  </div>
</template>
