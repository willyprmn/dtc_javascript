import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Course from './components/Course';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import Partner from './components/Patner';
import Video from './components/Video';
import Footer from './components/Footer';

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

  // const addCourse = e => {
  //   e.preventDefault()

  //   axios.post('/courses/add', { nama, harga, keterangan })
  //     .then(res => res.data)
  //     .then(data => setCourses([...courses, data]))
  //     .catch(err => console.log(err))
  // }

  if (loading) {
    return <p>Loading...</p>
  } else {
    return (
      <React.Fragment>
        <Header />
        <Banner />
        <Partner />
        <Video />
        <h1>Courses BabaStudio</h1>

        <ul>
          {!courses ? "no data" : courses.map(course => (
            // <Course key={course._id} course={course} addCourse={addCourse} />
            <Course key={course._id} course={course} />
          ))}
        </ul>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
