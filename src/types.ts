export type Colors = "green" | "orange" | "pink";

export interface CardProps {
  image: string | undefined;
  title: string;
  shortText: string;
  datePublish: string;
}

export type CardData = CardProps & { id: string };
