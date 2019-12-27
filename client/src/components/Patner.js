import React, { Fragment } from 'react';

const Partner = (props) => {
    return (
        <Fragment>
            <div className="partner-item">
                <div className="container text-center">
                    <h6>Pernah Di Liput Oleh :</h6>
                    <ul className="partner__list">
                        <li>
                            <img src={require('../images/metro.png')} className="img-fluid" alt="partner-logo" />
                        </li>
                        <li>
                            <img src={require('../images/kompas.png')} className="img-fluid" alt="partner-logo" />
                        </li>
                        <li>
                            <img src={require('../images/jktpost.png')} className="img-fluid" alt="partner-logo" />
                        </li>
                        <li>
                            <img src={require('../images/detik.png')} className="img-fluid" alt="partner-logo" />
                        </li>
                        <li>
                            <img src={require('../images/yahoo.png')} className="img-fluid" alt="partner-logo" />
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
}

export default Partner;