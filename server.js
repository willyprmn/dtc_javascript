const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;
// middleware
app.use(cors())
app.use(express.json());

// connect mongodb
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true })
    .then(() => console.log('connected to MOngoDB'))
    .catch(err => console.log(err))

//Routes
app.use('/courses', require('./router/courses'))

app.listen(port, () => console.log(`Running on port ${port}`));