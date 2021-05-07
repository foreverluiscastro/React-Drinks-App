# The Beer Fridge React App
My name is Luis and this is my Beer Fridge React App.

## Repository Infromation
You can find the github repository for this application [here](https://github.com/foreverluiscastro/React-Drinks-App).

### How Does it work?

`npm start` Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will load a navbar and Home page.\
Use the links to navigate to the other components.

### Beers page

The Beers page uses information obtained from a fetch request to an [external-API](https://api.punkapi.com/v2/beers).\
It renders two child components, BeerList and BeerShow,\
as well as creates routes for both their paths.

BeerList creates a list of Links attached\
to the specified beer using the beer's id.\

BeerShow uses destructuring to identify each beer by id and\
renders a div that displays the beers information in the browser.\
BeerShow also adds a button labeled "Save Beer" which saves the contents of\
each beer to an [internal-API](http://localhost:3001/fridge) using a `POST` request.

This where the fridge page comes in.

### Fridge page

The Fridge page functions in a manner similar to the Beers page.\
Since information was previously passed into the fridge via the "Save Beer"\
button from BeerShow, we know that the Fridge page will be displaying\ information added to our db.json through the `POST` request.\

Clicking the Fridge Link in the Navbar will render the Fridge component which also renders two child components, SavedBeerList and SavedBeerShow (beginning to see a pattern here?).

SavedBeerList creates a list of Links attached\
to the specified beer using the beer's id.\

SavedBeerShow uses destructing to identify each beer by id\
and renders a div that displays the beers information in the browser.\
SavedBeerShow also adds a button labeled "Remove Beer From Fridge" which\
triggers a `DELETE` request that removes the beer from the [internal-API].
