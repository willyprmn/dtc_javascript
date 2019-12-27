import React, { useState } from 'react';
import axios from 'axios';

const AddCourse = (props) => {
    const [nama, setNama] = useState('');
    const [harga, setHarga] = useState('');
    const [keterangan, setKeterangan] = useState('');


    return (
        <>
            <h1>Form Tambah Kursus</h1>
            <form onSubmit={}>
                <span>Nama : </span><input type="text" onChange={(e) => setNama(e.target.value)} value={nama} /><br />
                <span>Harga : </span><input type="number" onChange={(e) => setHarga(e.target.value)} value={harga} /><br />
                <span>Keterangan : </span><input type="text" onChange={(e) => setKeterangan(e.target.value)} value={keterangan} /><br />
                <button type="submit">submit</button>
            </form>
        </>
    );
}

export default AddCourse;