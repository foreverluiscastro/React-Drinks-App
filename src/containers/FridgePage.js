import React from 'react';
import { Route } from 'react-router-dom';
import SavedBeerList from '../components/SavedBeerList';
import SavedBeerShow from '../components/SavedBeerShow';

const FridgePage = ({ match, savedBeers, deleteBeer }) => (
    <div>
        <SavedBeerList savedBeers={savedBeers} />
        <Route exact path={match.url} render={() => <h3>Here are your saved beers!</h3>} />
        <Route path={`${match.url}/:id`} render={routerProps =>
        <SavedBeerShow {...routerProps} savedBeers={savedBeers} deleteBeer={deleteBeer}/>}/>
    </div>
)

export default FridgePage;