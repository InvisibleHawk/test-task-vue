import {
  RANDOM_SEED,
  DEFAULT_ADDITIONAL_DATA,
  COLORS,
  TEXT_COLORS,
} from "./constants";
import {
  CardData,
  PagesNum,
  DefautAdditionalDataType,
  NewsResponseData,
  EmitPayload,
} from "./types";

export const getRandomNumber = () =>
  Math.floor(Math.random() * RANDOM_SEED + 1) as PagesNum;

export const debounce = (fn: Function, ms: number) => {
  let timerID: ReturnType<typeof setTimeout> | null = null;
  return function (...args: any) {
    if (timerID) clearTimeout(timerID);

    timerID = setTimeout(() => {
      fn.apply(null, args);
    }, ms);
  };
};

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

export const changeColorAndIcon = (
  newsCards: CardData[],
  page: PagesNum,
  payload: EmitPayload,
): CardData[] => {
  return newsCards.map((entity) => {
    if (entity.page !== page) return entity;
    return {
      ...entity,
      icon: payload.icon,
      color: COLORS[`${payload.color}`],
      textColor: TEXT_COLORS[`${payload.color}`],
    };
  });
};
