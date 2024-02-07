// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import SubmitBook from './components/SubmitBook';
import ReviewForm from './components/ReviewForm';
import CommunityForum from './components/CommunityForum';
import PostForm from './components/PostForm';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <BookList />
        </Route>
        <Route path="/book/:id">
          <BookDetails />
        </Route>

