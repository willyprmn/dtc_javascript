import React, { Fragment } from 'react';

const Video = (props) => {
    return (
        <Fragment>
            <div className="video-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="video__iframe" id="prtal-embed">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/k8XN5iCJFhI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="video__description pt-5">
                                <div className="video__content pt4">
                                    <h2>Liputan Babastudio E-Learning di KompasTV bersama alumni</h2>
                                    <h5 className="text-secondary">KompasTV meliput Babastudio E-Learning karena, memberikan kursus pada lebih 500 orang setiap harinya.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Video;