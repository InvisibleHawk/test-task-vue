export type Colors = "green" | "orange" | "pink";

export type PagesNum = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type NewsResponseData = { data: { news: CardData[] } };

export interface CardProps {
  title: string;
  shortText: string;
  datePublish: string;
  image: string | undefined;
  color: string;
  textColor: string;
  icon: string;
}

export interface CardData {
  title: string;
  shortText: string;
  datePublish: string;
  image: string | undefined;
  slug: string;
  icon: string;
  color: string;
  textColor: string;
  page: number;
}

export interface EmitPayload {
  color: Colors;
  icon: string;
}

export interface DefautAdditionalDataType {
  textColor: string;
  color: string;
  icon: string;
  page: number;
}
