import React from 'react';
import { Link } from 'react-router-dom';

const BeerList = ({ beers }) => {
    const renderBeers = beers.map(beer =>
        <Link key={beer.id} to={`/beers/${beer.id}`}><button style={{backgroundColor: 'orange'}}>{beer.name}</button></Link>
    );
    
    return (
        <div>
            { renderBeers }
        </div>
    );
};

export default BeerList;