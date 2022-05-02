# Welcome to PokéTom!

This is my web UI that interfaces with the PokeAPI Restful API. I have had some previous experience with using Axios and interacting with APIs, and this was a great challenge to refresh my memory!

## To start

### `1) npm i`

To install all needed dependencies!

### `2) npm start`

Runs the app in the development mode on localhost:3000.

## How I worked

### `Planning`

To begin, I wireframed a quick design using Excalidraw, this is available to see at : . I found this extremely helpful as it let me think about where every component needed to be, and why. Once I was happy with my basic wireframe, I turned to npx create-react-app and got going!

I wanted the app to fit in with its content, and went for quite a cartoonish and colourful look. For the individual Pokemon pages, I tried to recreate a (simplified) version of a Pokemon trading card.

### `Frameworks`

I chose to use React for this project for a number of reasons.
Firstly, I'm a huge fan!

From a CSS point of view, I decided not to use any frameworks like Bootstrap as I wanted to challenge myself to use my CSS skills, but I can understand why you may use CSS frameworks for different projects!

## Challenges

Before this test, I had no experience using localStorage.

I had some trouble trying to access image data for the homepage, as this wasn't in the same part of the API as the initial call for the names. I fixed this (possibly a cheat way..sorry!) by getting my image for each pokemon from a site which I knew always ended its URL with the pokemons name:

### `` src={`https://img.pokemondb.net/artwork/large/${pokemons.name}.jpg`} ``

## Extra Features

I implemented a dark mode as this is a feature I often find myself using on other sites.

## If I had more time...

I'd love to explore the compare functionality a bit further, possibly mimicking a Top Trump style game - which card has the highest attack / defense / speed / etc of the two cards selected - possibly a button for 'Initiate Fight!' or something similar. For the individual card pages, I'd love to further style the Pokemon card to look more like an actual Pokemon trading card.

For the homepage, being able to search by type of pokemon would also be handy.

I'd love to further refactor my code, making as much use of reusable components and CSS styles as possible.
