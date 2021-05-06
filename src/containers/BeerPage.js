import React from 'react';
import { Route } from 'react-router-dom';
import BeerList from '../components/BeerList';
import BeerShow from '../components/BeerShow';

const BeerPage = ({ match, beers, addBeer }) => (
    <div>
        <BeerList beers={beers} />
        <Route exact path={match.url} render={() => <h3>Choose beers from the list above!</h3>} />
        <Route path={`${match.url}/:id`} render={routerProps =>
        <BeerShow {...routerProps} beers={beers} addBeer={addBeer}/>}/>
    </div>
)

export default BeerPage