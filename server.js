const express = require('express');
const app = express();
const mongoose = require('mongoose');

const port = process.env.PORT || 8000;
app.use(express.json())

mongoose.connect('mongodb://localhost/db_dtcjavascript', { useNewUrlParser: true, useUnifiedTopology: true }, () => connect)

//Routes

app.listen(port, () => console.log(`Running on port ${port}`));