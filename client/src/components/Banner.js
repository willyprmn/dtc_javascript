import React, { Fragment } from 'react';

const Banner = (props) => {
    return (
        <Fragment>
            <div className="banner">
                <div className="container">
                    <div className="banner__content">
                        <h1>
                            Kursus Online Digital Marketing<br />
                            Programing dan Desain<br />
                            Telah di ikuti 133 ribu alumni
                        </h1>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Banner;