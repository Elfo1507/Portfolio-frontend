import { CardStyle } from "../styles/card";

interface iCard {
  name: string;
  link: string;
}

export function Card({ name, link }: iCard) {
  return (
    <CardStyle>
      <h3>{name}</h3>
      <a href={link} target="_blank" rel="noreferrer">Repo</a>
    </CardStyle>
  );
}
