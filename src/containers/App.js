import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import BeerPage from './BeerPage';
import Home from '../components/Home';
import FridgePage from './FridgePage';
import '../App.css';

class App extends Component {

  state = {
    beers: [],
    savedBeers: []
  }

  componentDidMount() {
    console.log("Mounting")
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
    fetch('http://localhost:3000/fridge', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(beer)
    })
    .then(res => res.json())
    .then(data => {
      console.log("saving beer", data)
      this.setState({
        savedBeers: data
      })
    })
  }

  deleteBeer = (beer) => {
    console.log(beer)
  }

  render() {
    console.log("Rendering")
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={ Home }/>
          <Route path='/beers' render={ routerProps =>
          <BeerPage {...routerProps} beers={this.state.beers} addBeer={this.saveBeer}/>} />
          <Route path='/fridge' render={ routerProps =>
          <FridgePage {...routerProps} savedBeers={this.state.savedBeers} deleteBeer={this.deleteBeer}/>}/>
        </div>
      </Router>
    );
  }
}

export default App;

