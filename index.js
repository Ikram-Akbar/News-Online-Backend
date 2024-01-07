const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const categories = require('./fakeDB/categories.json');
const news = require("./fakeDB/news.json");

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get("/categories", (req, res) => {
    res.status(200).send(categories)
})

app.get("/news", (req, res) => {
    res.status(200).send(news)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})