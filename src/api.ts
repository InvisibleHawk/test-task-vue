import { INIT_PAGE } from "./constants";
import { CardData, PagesNum, NewsResponseData } from "./types";

const URL_API = "https://domotekhnika.ru/api/v1/news?page=";

const cache = new Map();

export const getNewsItem = async (
  page: PagesNum = INIT_PAGE,
): Promise<NewsResponseData | PagesNum | undefined> => {
  const fetchNews = async (page: PagesNum): Promise<NewsResponseData> => {
    let response = null;
    try {
      const data = await fetch(`${URL_API}${page}`);
      const jsonData = await data.json();
      response = jsonData;
      cache.set(page, page);
    } catch (_err) {
      const err = _err as Error;
      throw new Error(err.message);
    }
    return response;
  };

  let result: NewsResponseData | PagesNum | null = null;

  if (cache.has(page)) {
    result = page;
    return result;
  }

  result = await fetchNews(page);
  return result;
};
