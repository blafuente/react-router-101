import React, { Component } from 'react';
import './App.css';
// add the React Router module
// the main thing we ned is BrowserRouter
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import MovieList from './MovieList';
import Movie from './Movie';


class App extends Component {
  render() {
    const superHero = "Iron Man";
    // The router goes around EVERYTHING it needs to control
    return (
      <Router>
        <div className="App">
        <ul>
          {/* In react router, we don't use <a>, that's so 2015. */}
          {/* <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li> */}
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to ="/movies">Movies</Link>
        </ul>
        {/* Use the Route comonent to set up a path match */}
        {/* if the path matches the browser path, it will render */}
        {/* whatever is given as component prop */}
        {/* If you have path by itself, it will look for that in the URL  */}
        {/* To restrict to exact, use exact */}
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/" render={(props)=>{
            return(<Home superHero={superHero} /> )
          }} />
          <Route path="/about" component={About} />
          <Route path ="/movies" component={MovieList} /> 
          <Route path ="/movies/:movieId" component={Movie} />
        </div>
      </Router>
    );
  }
}

export default App;
