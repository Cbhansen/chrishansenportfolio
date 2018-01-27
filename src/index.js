import React from 'react';
import ReactDOM from 'react-dom';
import {
    Link,
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import './App.css';
import App from './App';
import Home from './components/home/Home';
import About from './components/about/About';
import Header from './components/header/Header';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';

ReactDOM.render(
    <Router>
        <div>
            <Route path="/" component={App} />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contacts" component={Contact} />
        </div>
    </Router>,
document.getElementById('root'));
