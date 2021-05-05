import React from 'react';
import { Link } from 'react-router-dom';

const SavedBeerList = ({ savedBeers }) => {
    const renderSavedBeers = savedBeers.map(beer =>
        <Link key={beer.id} to={`/fridge/${beer.id}`}></Link>
    )

    return (
        <div>
               { renderSavedBeers } 
        </div>
    )
}


export default SavedBeerList