import React from "react";
import Link from "next/link";
import { AdCard, AdCardProps } from "./AdCard";

export const ads: AdCardProps[] = [
  {
    id: 1,
    title: "Table",
    price: 120,
    link: "/ads/table",
    imgUrl: "/images/table.webp",
  },
  {
    id: 2,
    title: "Dame-jeanne",
    price: 75,
    link: "/ads/dame-jeanne",
    imgUrl: "/images/dame-jeanne.webp",
  },
  {
    id: 3,
    title: "Vide-poche",
    price: 4,
    link: "/ads/vide-poche",
    imgUrl: "/images/vide-poche.webp",
  },
  {
    id: 4,
    title: "Vaisselier",
    price: 900,
    link: "/ads/vaisselier",
    imgUrl: "/images/vaisselier.webp",
  },
  {
    id: 5,
    title: "Bougie",
    price: 8,
    link: "/ads/bougie",
    imgUrl: "/images/bougie.webp",
  },
  {
    id: 6,
    title: "Porte-magazine",
    price: 45,
    link: "/ads/porte-magazine",
    imgUrl: "/images/porte-magazine.webp",
  },
];

export function RecentAds(): React.ReactNode {
  return (
    <main className="main-content">
      <h2>Annonces récentes</h2>
      <section className="recent-ads">
        {ads.map((item) => (
          <AdCard
            id={item.id}
            key={item.id}
            title={item.title}
            price={item.price}
            imgUrl={item.imgUrl}
            link={item.link}
          />
        ))}
      </section>
    </main>
  );
}
