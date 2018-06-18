const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const generateRandom = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}
const minSize = 0,
    maxSize = 100,
    minWeight = 500,
    maxWeight = 1300;

const towers = [
    { id: 1, now: Date.now(), title: 'Уровень карналита в силосной башне №1', indicator: { id: '1', title: 'Indicator 1', minValue: minSize, maxValue: maxSize, value: generateRandom(minSize, maxSize) }, weight: generateRandom(minWeight, maxWeight) },
    { id: 2, now: Date.now(), title: 'Уровень карналита в силосной башне №2', indicator: { id: '2', title: 'Indicator 2', minValue: minSize, maxValue: maxSize, value: generateRandom(minSize, maxSize) }, weight: generateRandom(minWeight, maxWeight) },
    { id: 3, now: Date.now(), title: 'Уровень карналита в силосной башне №3', indicator: { id: '3', title: 'Indicator 3', minValue: minSize, maxValue: maxSize, value: generateRandom(minSize, maxSize) }, weight: generateRandom(minWeight, maxWeight) },
    { id: 4, now: Date.now(), title: 'Уровень карналита в силосной башне №4', indicator: { id: '4', title: 'Indicator 4', minValue: minSize, maxValue: maxSize, value: generateRandom(minSize, maxSize) }, weight: generateRandom(minWeight, maxWeight) },
    { id: 5, now: Date.now(), title: 'Уровень карналита в силосной башне №5', indicator: { id: '5', title: 'Indicator 5', minValue: minSize, maxValue: maxSize, value: generateRandom(minSize, maxSize) }, weight: generateRandom(minWeight, maxWeight) },
    { id: 6, now: Date.now(), title: 'Уровень карналита в силосной башне №6', indicator: { id: '6', title: 'Indicator 6', minValue: minSize, maxValue: maxSize, value: generateRandom(minSize, maxSize) }, weight: generateRandom(minWeight, maxWeight) },
    { id: 7, now: Date.now(), title: 'Уровень карналита в силосной башне №7', indicator: { id: '7', title: 'Indicator 7', minValue: minSize, maxValue: maxSize, value: generateRandom(minSize, maxSize) }, weight: generateRandom(minWeight, maxWeight) },
    { id: 8, now: Date.now(), title: 'Уровень карналита в силосной башне №8', indicator: { id: '8', title: 'Indicator 8', minValue: minSize, maxValue: maxSize, value: generateRandom(minSize, maxSize) }, weight: generateRandom(minWeight, maxWeight) }
];

app.get('/api/towers', (req, res) => {
    res.send(JSON.stringify(towers));
})


app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200 always');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
});
