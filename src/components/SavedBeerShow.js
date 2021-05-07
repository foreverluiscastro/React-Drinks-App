import '../App.css';
import React from 'react';

const SavedBeerShow = ({match, savedBeer, deleteBeer}) => {
    const beer = savedBeer[match.params.id-1]

    const handleClick = () => {
        deleteBeer(beer)
    }

    return (
        <div>
            <h3>{ beer.name }</h3>
            <button onClick={handleClick}>Delete Beer</button>
        </div>
    )
}

export default SavedBeerShow;