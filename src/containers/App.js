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
    fetch('https://api.punkapi.com/v2/beers')
    .then(resp => resp.json())
    .then(data =>
      this.setState({
        beers: data
      })
    )
  }

  handleClick = () => {
    
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={ Home }/>
          <Route path='/beers' render={ routerProps =>
          <BeerPage {...routerProps} beers={this.state.beers}/>} />
          <Route path='/fridge' render={ routerProps =>
          <FridgePage {...routerProps} beers={this.state.savedBeers} onChange={this.handleClick}/>}/>
        </div>
      </Router>
    );
  }
}

export default App;

