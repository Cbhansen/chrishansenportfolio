import React, { Component } from 'react';

export default class Contact extends React.Component {
    render() {
        return (
            <div className="contact-container container-fluid animated fadeIn">
                <div id="contact-cover"><div>About</div></div>
                <div className="about-wrapper">
                    <h6>www.chrisbhansen.com</h6>
                    <h3>805.865.4172</h3>
                    <p>East Bay, CA</p>
                    <p><a href="#"><i class="fa fa-github" aria-hidden="true"></i></a></p>
                    <p><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></p>
                </div>
            </div>
        )
    }
}   
