import '../App.css';
import React from 'react';

const SavedBeerShow = ({match, savedBeers, deleteBeer}) => {
    const beer = savedBeers[match.params.id-1]

    const handleClick = () => {
        deleteBeer(beer)
    }

    return (
        <div className="card">
            <h3>{ beer.name }</h3>
            <img src={ beer.image_url } class="beer-avatar" alt=""/>
            <p><b>Tagline:</b><i>{ beer.tagline }</i></p>
            <p><b>Abv:</b>{ beer.abv }</p>
            <p><b>Description:</b>{ beer.description }</p>
            <p><b>Pairs well with:</b>{ beer.food_pairing.join(", ") }</p>
            <button onClick={handleClick}>Remove Beer From Fridge</button>
        </div>
    )
}

export default SavedBeerShow;