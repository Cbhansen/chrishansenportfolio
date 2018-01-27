import React, { Component } from 'react';

export default class About extends React.Component {
    render() {
        return (
            <div className="about-container container-fluid animated fadeIn">
                <div className="about-wrapper">
                    <div className="row">
                        <div className="col-md-12">
                            <h3>My Story</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatum obcaecati repudiandae distinctio pariatur reiciendis numquam deleniti officia possimus aliquam cumque molestiae, at ullam sint fuga asperiores est hic mollitia.</p>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Experience</h3>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati alias ducimus, adipisci error nobis architecto itaque quo consequuntur sed quas deserunt, facere unde totam. Culpa, officia harum. Harum, iusto corporis.
                        </div>
                        
                        <div className="col-md-4">
                            <h3>Skills</h3>
                            <ul className="list-group">
                                <li className="list-group-item">jquery</li>
                                <li className="list-group-item">vue</li>
                                <li className="list-group-item">react</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h3>Goals</h3>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet reprehenderit non accusantium ea aspernatur voluptatem similique. Aliquam illum, temporibus, eum sequi nulla, laborum nobis voluptatum obcaecati assumenda et dignissimos id.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
