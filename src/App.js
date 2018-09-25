import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './seen/home';
import FormId from './seen/form';
import RecommendedPosts from './seen/recommended';
import './App.css';



class App extends Component {
  render() {
    
    return (
      <BrowserRouter>
        <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/form/:type' component={FormId}/>
              <Route path='/recommended-posts/:id' component={RecommendedPosts}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
