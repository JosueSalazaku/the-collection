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

    cardsInfo(painting, paintingCards)
  })
}

function cardsInfo(painting, paintingCards) {
  let artTitle = document.createElement('p');
  artTitle.textContent = painting.title;
  paintingCards.appendChild(artTitle)

  let artistName = document.createElement('h1');
  artistName.textContent = painting.artist;
  paintingCards.appendChild(artistName);

  let artDescription = document.createElement('p');
  artDescription.textContent = painting.description;
  paintingCards.appendChild(artDescription);

  let artStyle = document.createElement('p');
  artStyle.textContent = painting.style;
  paintingCards.appendChild(artStyle)

  let artDimensions = document.createElement('p');
  artDimensions.textContent = painting.dimensions;
  paintingCards.appendChild(artDimensions);

  let artMedium = document.createElement('p');
  artMedium.textContent = painting.medium;
  paintingCards.appendChild(artMedium);

  console.log(painting.artist) 
}
collectionsCard()