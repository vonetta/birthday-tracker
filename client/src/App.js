import React, { Component } from 'react';
import './App.css';
import './css/style.css'
import Register from './register'
import Login from './login'
import Home from './home'
import dotenv from 'dotenv'
import { Link, BrowserRouter, Route} from 'react-router-dom'

dotenv.config()

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <header className="App-header">
        <Link to={`/home`}>Home</Link>
        <Link to={`/register`}>Register</Link>
        <Link to={`/login`}>Login</Link>
        </header>
          <Route path="/home" component={Home} />
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
