import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import SavedBeerList from '../components/SavedBeerList';
import SavedBeerShow from '../components/SavedBeerShow';

// const FridgePage = ({ match, savedBeers, deleteBeer }) => {
const FridgePage = ({ match, deleteBeer }) => {
    const [savedBeers, setSavedBeers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/fridge')
        .then(res => res.json())
        .then(data => setSavedBeers(data))
    }, [])

    
    // debugger;
    return (
    <div>
        <SavedBeerList savedBeers={savedBeers} deleteBeer={deleteBeer}/>
        <Route exact path={match.url} render={() => <h3>Here are your saved beers!</h3>} />
        {/* <Route path={`http://localhost:3001/:id`} render={routerProps =>
        <SavedBeerShow {...routerProps} savedBeers={savedBeers} deleteBeer={deleteBeer}/>}/> */}
        <Route path={`${match.url}/:id`} render={routerProps =>
        <SavedBeerShow {...routerProps} savedBeers={savedBeers} deleteBeer={deleteBeer}/>}/>
    </div>
)}

export default FridgePage;

