import React from 'react';
import { Link } from 'react-router-dom';

const BeerList = ({ beers }) => {
    const renderBeers = Object.keys(beers).map(beerID =>
        <Link key={beerID} to={`/beers/${beerID}`}>{beers[beerID].title}</Link>
    );
    
    return (
        <div>
            {renderBeers}
        </div>
    );
};

export default BeerList;