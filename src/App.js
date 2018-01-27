import React, { Component } from 'react';
import './App.css';

// import compoents
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    //binding

    // set state 
    this.state = {
      reactProjects: ['react project 1', 'react project 2'],
      vueProjects: ['vue project 1', 'vue proejct 2'],
      nodeProjects: ['node project 1', 'node project 2']
    }
  }
  // actions
  render() {
    return (
      <div>
        <Header />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
