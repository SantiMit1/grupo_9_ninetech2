const express = require('express');
const path = require("path");
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.use(express.static(path.resolve(__dirname, "./public")))
console.log(path.resolve(__dirname, "./public"))
app.listen(port, () => console.log(`Example app listening on port ${port}!`));