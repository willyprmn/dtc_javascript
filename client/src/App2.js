import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Course from './components/Course';

// ini react statefull component
// class App extends Component {}

// ini stateless component
const App = (props) => {
    const [courses, setCourses] = useState(null);
    const [loading, setLoading] = useState(true); //loading untuk data yg belum masuk

    const [nama, setNama] = useState('');
    const [harga, setHarga] = useState('');
    const [keterangan, setKeterangan] = useState('');


    useEffect(() => {
        // get data from API that we created before
        axios.get('/courses')
            .then(res => res.data)
            .then(data => setCourses(data), setLoading(false))
            .catch(err => console.log(err));
    }, [setCourses])

    const addCourse = e => {
        e.preventDefault()

        axios.post('/courses/add', { nama, harga, keterangan })
            .then(res => res.data)
            .then(data => setCourses([...courses, data]))
            .catch(err => console.log(err))
    }

    if (loading) {
        return <p>Loading...</p>
    } else {
        return (
            <>
                <h1>Courses BabaStudio</h1>

                <ul>
                    {!courses ? "no data" : courses.map(course => (
                        <Course key={course._id} course={course} addCourse={addCourse} />
                    ))}
                </ul>

                <hr />

                <h1>Form Tambah Kursus</h1>
                <form onSubmit={addCourse}>
                    <span>Nama : </span><input type="text" onChange={(e) => setNama(e.target.value)} value={nama} /><br />
                    <span>Harga : </span><input type="number" onChange={(e) => setHarga(e.target.value)} value={harga} /><br />
                    <span>Keterangan : </span><input type="text" onChange={(e) => setKeterangan(e.target.value)} value={keterangan} /><br />
                    <button type="submit">submit</button>
                </form>
            </>
        );
    }
}

export default App;
