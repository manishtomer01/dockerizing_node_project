const express = require('express');
const app = express();
const port = 3000;

app.get('/home', (req, res) => {
    res.json({ message: 'OK' })
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});