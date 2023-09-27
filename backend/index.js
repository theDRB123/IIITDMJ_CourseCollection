const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/home' , (req, res) => {
    res.send('Hello World');
});

app.listen(4000, () => {
    console.log("server is listening on port 4000 ....")
})