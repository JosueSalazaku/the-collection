import { paintingsCollection } from "./collections";

const container = document.querySelector(".container");

function collectionsCard() {
  paintingsCollection.forEach((painting) => {
    console.log(painting)

    const paintingCards = document.createElement("div")
    paintingCards.classList.add('cards')
  })
}
collectionsCard()