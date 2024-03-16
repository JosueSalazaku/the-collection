import { paintingsCollection } from "./collections";

const container = document.querySelector(".container");
const displayCards = document.querySelector(".display-cards");

function collectionsCard() {
  paintingsCollection.forEach((painting) => {
    console.log(painting)

    const paintingCards = document.createElement("div")
    paintingCards.classList.add('cards')
    container.appendChild(displayCards);
    displayCards.appendChild(paintingCards);
  })
}
collectionsCard()