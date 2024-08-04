import { ref, reactive, computed } from "vue";
import { CardData, PagesNum } from "../../types";
import { INIT_PAGE } from "../../constants";
import { getNewsItem } from "../../api";



export const useFetchNews = (page: PagesNum = INIT_PAGE) => {
  const data = ref<CardData[] | null>(null);
  const error = ref<Error | null>(null);

  const fetch = async () => {
    try {
      const result = await getNewsItem(page);
      data.value = result.data.news;
    } catch (err) {
      error.value = err as Error;
    }
  };

  fetch();

  return { data, error, fetch };
};
