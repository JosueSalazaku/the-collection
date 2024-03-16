import { paintingsCollection } from "./collections";

const container = document.querySelector(".container");

function collectionsCard() {
  paintingsCollection.forEach((painting) => {
    console.log(painting)
  })
}
collectionsCard()