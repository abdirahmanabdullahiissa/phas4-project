import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import BookList from './BookList';
import Search from './Search';
import BookDetails from './BookDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <BookList />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/books/:id">
            <BookDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
