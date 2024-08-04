import { ref, reactive, computed } from "vue";
import { CardData, PagesNum } from "../../types";
import { INIT_PAGE } from "../../constants";
import { getNewsItem } from "../../api";

export const useFetchNews = (page: PagesNum = INIT_PAGE) => {
  const newsCardData = ref<CardData[] | null>(null);
  const error = ref<Error | null>(null);

  const fetch = async () => {
    let response = null;
    try {
      response = await getNewsItem(page);
    } catch (err) {
      error.value = err as Error;
    }

    return response;
  };

  fetch();

  return { newsCardData, error, fetch };
};
