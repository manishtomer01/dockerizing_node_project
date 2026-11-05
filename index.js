const express = require('express');
require('dotenv').config();
const app = express();

app.get('/home', (req, res) => {
    res.json({ message: 'OK' })
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});