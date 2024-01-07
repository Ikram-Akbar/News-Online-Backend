const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const categories = require("./fakeDB/categories.json");
const news = require("./fakeDB/news.json");

app.use(cors());

app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello World!" });
});

app.get("/categories", (req, res) => {
    res.status(200).send(categories);
});
app.get("/categories/:id", (req, res) => {
    const id = req.params.id;

    if (id == 0) {
        res.send(news);
    } else {
        const result = categories.filter((c) => c.id === id);
        res.send(result);
    }
});

app.get("/news", (req, res) => {
    res.status(200).send(news);
});
app.get("/news/:id", (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find((n) => n._id === id);
    if (!selectedNews) {
        res.status(404).send({ message: "News not found" });
    } else {
        res.send(selectedNews);
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
