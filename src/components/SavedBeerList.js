import React from 'react';
import { Link } from 'react-router-dom';

const SavedBeerList = ({ savedBeers }) => {
    const renderSavedBeers = savedBeers.map(beer =>
        <Link key={beer.id} to={`/fridge/${beer.id}`}><button style={{background: 'orange'}}>{beer.name}</button></Link>
    )

    return (
        <div>
               { renderSavedBeers } 
        </div>
    )
}


export default SavedBeerList