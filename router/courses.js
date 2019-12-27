const router = require('express').Router();
const Course = require('../models/Course');

// url : localhost:8000/courses/
// GET ALL DATA
router.get('/', async (req, res) => {
    // res.send('ini root');
    try {
        const result = await Course.find(); // mengambil semua data di db (select * from Course)
        res.json(result);
    } catch (err) {
        res.status(400).send(err)
    }
})

// GET SATU DATA
// URL localhost:8000/:id
router.get('/:id', async (req, res) => {
    // res.send(req.params.id);
    try {
        const result = await Course.findOne({ _id: req.params.id });
        // const result = await Course.findById(req.params.id);
        if (!result) return res.status(404).send('course not found');
        res.json(result);
    } catch (err) {
        res.status(400).send(err)
    }
})

// ADD COURSE
router.post('/add', async (req, res) => {
    try {
        const newCourse = new Course(req.body);

        const result = await newCourse.save();
        res.json(result)
    } catch (err) {
        res.status(400).send(err);
    }
})

// EDIT COURSE
router.put('/edit/:id', async (req, res) => {
    try {
        const result = await Course.findByIdAndUpdate(req.params.id, req.body);
        // res.json(result) => Delay : mengirim data sebelum di update
        res.send('course is updated');
    } catch (err) {
        res.status(400).send(err)
    }
})

// DELETE COURSE
// URL /delete
router.delete('/delete/:id', async (req, res) => {
    // Course.findByIdAndDelete(req.params.id)
    // .then(() => res.send('course deleted'))
    // .catch(err => res.status(400).send(err))
    try {
        const result = await Course.findByIdAndDelete(req.params.id);
        if (result.message) return res.status(404).send("course not found");

        res.send('course deleted');
    } catch (err) {
        res.status(400).send(err)
    }
})

module.exports = router