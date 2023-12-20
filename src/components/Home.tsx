import React from "react";
import {Card} from "./productCard";

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

// for(let i of cards){
//     const ExComponent = () => {
//         return <Card img={i.img} name={i.name} price={i.price} />;
//     }
// }

export function Page(){
    for(let i of cards){
        const ExComponent = () => {
            return <Card img={i.img} name={i.name} price={i.price} />;
        }
    }
}