import React from "react";
import {Card} from "./productCard";

export const Page: React.FC = () => {
  const cards = [
    {
        img : './img/card_1.webp',
        name : 'p1',
        price : 'pr1'
    },
    {
        img : './img/card_1.webp',
        name : 'p2',
        price : 'pr2'
    },
    {
        img : './img/card_1.webp',
        name : 'p3',
        price : 'pr3'
    }
]

  return (
    <div>
      {cards.map((i, index) => (
        <Card key={index} img={require(i.img)} name={i.name} price={i.price} />
      ))}
    </div>
  );
};