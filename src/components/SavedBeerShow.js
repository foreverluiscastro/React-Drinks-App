import '../App.css';
import React from 'react';

const SavedBeerShow = ({match, savedBeers, deleteBeer}) => {
    // debugger;
    const beer = savedBeers[match.params.id-1]

    const handleClick = () => {
        deleteBeer(beer)
    }

    return (
        <div className="card">
            <h3>{ beer.name }</h3>
            <img src={ beer.image_url } class="beer-avatar" alt=""/>
            <button onClick={handleClick}>Delete Beer</button>
        </div>
    )
}

export default SavedBeerShow;