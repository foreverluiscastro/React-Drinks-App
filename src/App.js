import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

class App extends Component {

  state = {
    beers: ""
  }

  componentDidMount() {
    fetch('https://api.punkapi.com/v2/beers')
    .then(res => res.json())
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
          <Route exact path="/" render={ () => <div>Home</div> }/>
          <Route path='/beers' render={ routerProps => <BeersPage {...routerProps} beers={this.state.beers}/>} />
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
