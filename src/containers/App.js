import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import BeerPage from './BeerPage';
import Home from '../components/Home';
import TheFridge from '../components/TheFridge';
import '../App.css';

class App extends Component {

  state = {
    beers: ""
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

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={ Home }/>
          <Route path='/beers' render={ routerProps => <BeerPage {...routerProps} beers={this.state.beers}/>} />
          <Route exact path='/thefridge' component={TheFridge}/>
        </div>
      </Router>
    );
  }
}

export default App;

{/* <div className="App">
        <header className="App-header">
          <p>
            The name of my app! tbd...
          </p>
        </header>
      </div> */}
