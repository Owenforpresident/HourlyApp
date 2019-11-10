import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Clock from './components/clock/Clock';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component { 
  render() {
    return (
        <Router>
          <div className="App">
            <Header branding="ByTheHour" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Clock} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}

export default App;
