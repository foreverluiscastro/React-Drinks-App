import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import BeerPage from './BeerPage';
import Home from '../components/Home'

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
        <div>
          <NavBar />
          <Route exact path="/" component={ Home }/>
          <Route path='/beers' render={ routerProps => <BeerPage {...routerProps} beers={this.state.beers}/>} />
          <Route path='/cart'/>
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
