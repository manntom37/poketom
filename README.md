# Welcome to PokéTom!

This is my web UI that interfaces with the PokeAPI Restful API. I have had some previous experience with using Axios and interacting with APIs, and this was a great challenge to refresh my memory! Link to hosted version : https://poketom.herokuapp.com/

## To start

Once forked and open in your code editor, please do the following:

### `1) npm i`

To install all needed dependencies!

### `2) npm start`

Runs the app in the development mode on localhost:3000.

## How I worked

### `Planning`

To begin, I wireframed a quick design using Excalidraw. I found this extremely helpful as it let me think about where every component needed to be, and why. Once I was happy with my basic wireframe, I turned to npx create-react-app and got going!

I wanted the app to fit in with its content, and went for quite a cartoonish and colourful look. For the individual Pokemon pages, I tried to recreate a (simplified) version of a Pokemon trading card.

### `Frameworks`

I chose to use React for this project for a number of reasons.
Firstly, I'm a big fan! I especially like components in React, and I find using React a nice experience, especially due to JSX.

From a CSS point of view, I decided not to use any frameworks like Bootstrap as I wanted to challenge myself to use my raw CSS skills, but I can understand why you may use CSS frameworks for different projects!

## Challenges

Before this test, I had no experience using localStorage. I had a few issues with this but it was an interesting experience learning about this. Although the favourite data persists on refresh, if I go back and add extra pokemon, the initial pokemon are removed from the favourites array. Although I did not get this and the favouriting to work how I'd eventually like, I'm still going to try and fix this.

I was hoping that by favouriting a pokemon, I could fill in the heart to indicate it had been favourited, however I could only get this to work by every heart becoming filled in! Definitely something I'm going to work on.

I had some trouble trying to access image data for the homepage, as this wasn't in the same part of the API as the initial call for the names. I fixed this (possibly a cheat way..sorry!) by getting my image for each pokemon from a site which I knew always ended its URL with the pokemons name:

### `` src={`https://img.pokemondb.net/artwork/large/${pokemons.name}.jpg`} ``

## Extra Features

I implemented a dark(ish) mode as this is a feature I often find myself using on other sites, and tried to make the site as accessible as possible.

## If I had more time...

If I had more time I'd definitely further refactor my code, making as much use of reusable components as possible. For example, the homepage is a mess, sorry for that! I'd love to refactor and possibly make the homepage pokemon cards their own reusable component (in fact I will do this after sending this code to be reviewed as it's bugging me!), as well as making things like buttons and search bars reusable components.

I think it'd be fun to explore the compare functionality a bit further, possibly mimicking a Top Trumps style game - which card has the highest attack / defense / speed / etc of the two cards selected - possibly a button for 'Initiate Fight!' or something similar. For the individual card pages, I'd love to further style the Pokemon card to look more like an actual Pokemon trading card.

I wish I could have spent more time on responsive design and making the site look great on mobile.

I think adding extra interactivity would make the site nicer too, small animations like when favouriting a pokemon could appear similarly to the Twitter animation when favouriting a tweet.

I would also have added testing and possibly used TDD for my functions.
