export type Colors = "green" | "orange" | "pink";

export interface CardProps {
  image: string | undefined;
  title: string;
  shortText: string;
  datePublish: string;
  color: string;
  textColor: string;
  icon: string;
}

export interface CardData {
  title: string;
  shortText: string;
  datePublish: string;
  image: string;
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

export type PagesNum = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
