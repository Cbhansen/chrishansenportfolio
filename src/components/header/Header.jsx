import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
 } from 'react-router-dom'

export default class Header extends React.Component {
    render() {
        return (
                <header className="header-container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarColor03">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active"><Link to="/">Home</Link></li>
                                <li className="nav-item"><Link to="/projects">Projects</Link></li>
                                <li className="nav-item"><Link to="/about">About</Link></li>
                                <li className="nav-item"><Link to="/contacts">Contact</Link></li>
                            </ul>
                        </div>
                    </nav>
                </header>
        )
    }
}