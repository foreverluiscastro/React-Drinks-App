import '../App.css';
import React from 'react';

const BeerShow = ({match, beers}) => {
    const beer = beers[match.params.id-1]

    return(
        <div className="card">
            <h3>{ beer.name }</h3>
            <img src={ beer.image_url } class="beer-avatar" alt=""/>
            <p><b>Tagline:</b><i>{ beer.tagline }</i></p>
            <p><b>Abv:</b>{ beer.abv }</p>
            <p><b>Description:</b>{ beer.description }</p>
            <p><b>Pairs well with:</b>{ beer.food_pairing }</p>
        </div>
    );
}

export default BeerShow;