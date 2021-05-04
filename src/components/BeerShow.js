import React from 'react';

const BeerShow = ({match, beers}) => {

    return(
        <div>
            <h3>{ beers[match.params.beerId].name }</h3>
            <p>Tagline:{ beers[match.params.beerId].tagline }</p>
            <p>Abv:{ beers[match.params.beerId].abv }</p>
            <p>Description:{ beers[match.params.beerId].description }</p>
        </div>
    );
}

export default BeerShow;