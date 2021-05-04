import React from 'react';

const BeerShow = ({match, beers}) => {

    return(
        <div>
            <h3>{ beers[match.params.beerId].title }</h3>
        </div>
    );
}

export default BeerShow;