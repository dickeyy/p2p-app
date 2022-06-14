const express = require('express');

const app = express();
const port = 3000;


// Middleware
// JSON
app.use(express.json());



app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})