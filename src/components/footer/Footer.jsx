import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer container">
                <div className="row">
                    <div className="col-md-4">
                        <h6 className="text-muted">Social</h6>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, corporis?</p>
                    </div>
                    <div className="col-md-4">
                        <h6 className="text-muted">Resume</h6>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, est!</p>
                    </div>
                    <div className="col-md-4">
                        <h6 className="text-muted">Blog</h6>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, officia!</p>
                    </div>
                </div>
            </footer>
        )
    }
}