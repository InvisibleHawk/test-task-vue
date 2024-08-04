import { Colors, DefautAdditionalDataType } from "./types";

export const RANDOM_SEED = 1;
export const INIT_PAGE = 7;

export const ORANGE_COLOR = "#FB9600";
export const PINK_COLOR = "#FF00B8";
export const GREEN_COLOR = "#378B60";

export const BUTTON_COLORS: Record<Colors, String> = {
  orange: "bg-[#FB9600]",
  pink: "bg-[#FF00B8]",
  green: "bg-[#378B60]",
};

export const TEXT_COLORS: Record<Colors, string> = {
  orange: "text-[#FB9600]",
  pink: "text-[#FF00B8]",
  green: "text-[#378B60]",
};

export const COLORS: Record<Colors, string> = {
  orange: "#FB9600",
  pink: "#FF00B8",
  green: "#378B60",
};

export const MONTH_NAME: Record<string, string> = {
  "1": "января",
  "2": "февраля",
  "3": "марта",
  "4": "апреля",
  "5": "мая",
  "6": "июня",
  "7": "июля",
  "8": "августа",
  "9": "сентября",
  "10": "октября",
  "11": "ноября",
  "12": "декабря",
};

export const DEFAULT_ADDITIONAL_DATA: DefautAdditionalDataType = {
  textColor: TEXT_COLORS.green,
  color: COLORS["green"],
  icon: "pig",
  page: INIT_PAGE,
};
