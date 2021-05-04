import '../App.css';
import React from 'react';

const BeerShow = ({match, beers}) => {

    return(
        <div className="card">
            <h3>{ beers[match.params.beerId].name }</h3>
            <img src={ beers[match.params.beerId].image_url } class="beer-avatar"/>
            <p>Tagline:{ beers[match.params.beerId].tagline }</p>
            <p>Abv:{ beers[match.params.beerId].abv }</p>
            <p>Description:{ beers[match.params.beerId].description }</p>
            <p>Pairs well with:{ beers[match.params.beerId].food_pairing.join(", ") }</p>
        </div>
    );
}

export default BeerShow;