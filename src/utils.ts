import { RANDOM_SEED, DEFAULT_ADDITIONAL_DATA } from "./constants";
import {
  CardData,
  PagesNum,
  DefautAdditionalDataType,
  NewsResponseData,
} from "./types";

export const getRandomNumber = () =>
  Math.floor(Math.random() * RANDOM_SEED + 1) as PagesNum;

export const transformNewsItems = (
  response: NewsResponseData,
  additionalData: DefautAdditionalDataType = DEFAULT_ADDITIONAL_DATA,
) => {
  const { news } = response.data;
  const { textColor, color, icon, page } = additionalData;
  const mutatedNewsItems: CardData[] = news.map(
    (entity: CardData): CardData => {
      entity.textColor = textColor;
      entity.color = color;
      entity.icon = icon;
      entity.page = page;
      return entity;
    },
  );

  return mutatedNewsItems;
};
