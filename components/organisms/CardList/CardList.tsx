"use client";

import Card from "@/components/molecules/Card/Card";
import styles from "./CardList.module.css";

type CardItem = {
  id: number;
  title: string;
  description?: string;
};

type CardListProps = {
  items: CardItem[];
  onCardClick?: (item: CardItem) => void;
};

export default function CardList({ items, onCardClick }: CardListProps) {
  return (
    <>
      <div className={styles["card-list-layout"]}>
        {items.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
          ></Card>
        ))}
      </div>
    </>
  );
}
