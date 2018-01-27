import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
 } from 'react-router-dom'
import './Home.css';


import MyCarousel from '../carousel/Carousel';

const Home = () => {
    return (
        
        <div id="home" className="home-container page animated fadeIn">
            <div className="outter-cover">
                <div className="inner-cover">
                    <h1>Chris Hansen</h1>
                    <p>Frontend Developer</p>
                    <li className="btn btn-info nav-item"><Link to="/projects">Projects</Link></li>
                    <a className="btn" target="_blank" href="https://github.com">Github</a>
                </div>
            </div>
        </div>
    )
}

export default Home;