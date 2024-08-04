import { RANDOM_SEED } from "./constants";
import { PagesNum } from "./types";

export const getRandomNumber = () =>
  Math.floor(Math.random() * RANDOM_SEED + 1) as PagesNum;

export const transformNewsItems = () => {};
