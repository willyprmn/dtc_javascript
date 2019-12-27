import React from 'react';

const Course = (props) => {
    const { nama, harga, keterangan } = props.course
    return (
        <>
            <li>{nama}, {harga}, {keterangan}</li>
        </>
    );
}

export default Course;