import '../App.css';
import React from 'react';

const SavedBeerShow = ({match, savedBeer}) => {
    const beer = savedBeer[match.params.id-1]
    return (
        <div>
            <h3>{beer.name}</h3>
        </div>
    )
}

export default SavedBeerShow;