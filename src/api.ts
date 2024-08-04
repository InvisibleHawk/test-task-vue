import { INIT_PAGE } from "./constants";
import { CardData, PagesNum } from "./types";

const URL_API = "https://domotekhnika.ru/api/v1/news?page=";

export const getNewsItem = async (
  page: PagesNum = INIT_PAGE,
): Promise<{ data: { news: CardData[] } }> => {
  let result = null;
  try {
    const data = await fetch(`${URL_API}${page}`);
    const jsonData = await data.json();
    result = jsonData;
  } catch (_err) {
    const err = _err as Error;
    throw new Error(err.message);
  }

  return result;
};
