import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import BeerPage from './BeerPage';
import Home from '../components/Home';
import FridgePage from './FridgePage';
import '../App.css';

class App extends Component {

  state = {
    beers: []
  }

  componentDidMount() {
    fetch('https://api.punkapi.com/v2/beers')
    .then(resp => resp.json())
    .then(data =>
      this.setState({
        beers: data
      })
    )
  }

  saveBeer = (beer) => {
    console.log(beer)
  }

  deleteBeer = (beer) => {
    console.log(beer)
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={ Home }/>
          <Route path='/beers' render={ routerProps =>
          <BeerPage {...routerProps} beers={this.state.beers} addBeer={this.saveBeer}/>} />
          <Route path='/fridge' render={ routerProps =>
          <FridgePage {...routerProps} beers={this.state.beers} deleteBeer={this.deleteBeer}/>}/>
        </div>
      </Router>
    );
  }
}

export default App;

