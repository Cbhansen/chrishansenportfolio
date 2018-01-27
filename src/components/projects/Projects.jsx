import React, { Component } from 'react';

export default class Projects extends React.Component {
    render() {
        const vueFlix = require('../../assets/images/vueFlix.png');
        return (
            <div className="projects-container container-fluid animated fadeIn">
            <div id="projects-cover"><div>Projects</div></div>
                <div className="gallery-wrapper">
                    <div className="card gallery-item">
                        <h3 className="card-header">Card-header</h3>
                    <div className="card-body">
                        <h5 className="card-title">Card-title</h5>
                        <h6 className="card-subtitle text-muted">Support card subtitle</h6>
                    </div>
                    <img src={vueFlix} alt=""/>
                    <div className="card-body">
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, dolorem.</p>
                        <a href="#" className="card-link">Github</a>
                    </div>
                    <div className="card-footer text-muted">
                        <a target="_blank" href="https://vueflix-992cd.firebaseapp.com/" className="btn btn-block btn-success">View</a>
                    </div>
                    </div>
                    <div className="card gallery-item">
                        <h3 className="card-header">Card-header</h3>
                    <div className="card-body">
                        <h5 className="card-title">Card-title</h5>
                        <h6 className="card-subtitle text-muted">Support card subtitle</h6>
                    </div>
                    <img src="https://coligo.io/vuejs-the-basics/cover.jpg" alt=""/>
                    <div className="card-body">
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, dolorem.</p>
                        <a href="#" className="card-link">Github</a>
                    </div>
                    <div className="card-footer text-muted">
                        <button className="btn btn-block btn-success">View</button>
                    </div>
                    </div>
                    <div className="card gallery-item">
                        <h3 className="card-header">Card-header</h3>
                    <div className="card-body">
                        <h5 className="card-title">Card-title</h5>
                        <h6 className="card-subtitle text-muted">Support card subtitle</h6>
                    </div>
                    <img src="http://yannickloriot.com/wp-content/uploads/2016/04/nodejs_logo_2016.png" alt=""/>
                    <div className="card-body">
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, dolorem.</p>
                        <a href="#" className="card-link">Github</a>
                    </div>
                    <div className="card-footer text-muted">
                        <button className="btn btn-block btn-success">View</button>
                    </div>
                    </div>
                    <div className="card gallery-item">
                        <h3 className="card-header">Card-header</h3>
                    <div className="card-body">
                        <h5 className="card-title">Card-title</h5>
                        <h6 className="card-subtitle text-muted">Support card subtitle</h6>
                    </div>
                    <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5a31d03ddee66863a599421f792e07b&auto=format&fit=crop&w=1650&q=80" alt=""/>
                    <div className="card-body">
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, dolorem.</p>
                        <a href="#" className="card-link">Github</a>
                    </div>
                    <div className="card-footer text-muted">
                        <button className="btn btn-block btn-success">View</button>
                    </div>
                    </div>
                    <div className="card gallery-item">
                        <h3 className="card-header">Card-header</h3>
                    <div className="card-body">
                        <h5 className="card-title">Card-title</h5>
                        <h6 className="card-subtitle text-muted">Support card subtitle</h6>
                    </div>
                    <img src="https://images.unsplash.com/photo-1496243975092-6ec259c776e2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2565329d9d44aece28956ec9481c540c&auto=format&fit=crop&w=1650&q=80" alt=""/>
                    <div className="card-body">
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, dolorem.</p>
                        <a href="#" className="card-link">Github</a>
                    </div>
                    <div className="card-footer text-muted">
                        <button className="btn btn-block btn-success">View</button>
                    </div>
                    </div>
                    <div className="card gallery-item">
                        <h3 className="card-header">Card-header</h3>
                    <div className="card-body">
                        <h5 className="card-title">Card-title</h5>
                        <h6 className="card-subtitle text-muted">Support card subtitle</h6>
                    </div>
                    <img src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=843991c27d422f3207d8dda937413274&auto=format&fit=crop&w=1657&q=80" alt=""/>
                    <div className="card-body">
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, dolorem.</p>
                        <a href="#" className="card-link">Github</a>
                    </div>
                    <div className="card-footer text-muted">
                        <button className="btn btn-block btn-success">View</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
