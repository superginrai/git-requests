const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
const quotes_data = require('./modules/quotes-data');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/quote', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 3);
    res.send(quotes_data[randomNumber]);
});

app.get('/all-quotes', (req, res) => {
    res.send(quotes_data);
});

app.post('/add-quote', (req, res) => {
    console.log(req.body);//needs body parser
    quotes_data.push(req.body);
    res.sendStatus(200);
});

app.get('/', (req, res) => {
    console.log('Yup, it worked!');
    res.send('Happy Tacos!!');
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});