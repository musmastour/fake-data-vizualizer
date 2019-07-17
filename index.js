const pg = require('pg');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

const settings = {
    port: process.env.PORT || 3000
}

const pool = new pg.Pool({
    user: 'wiyodttjlbynyw',
    host: 'ec2-54-247-170-5.eu-west-1.compute.amazonaws.com',
    database: 'd6doqnveou4tn9',
    password: '7d1c7aba578249c12407ffa3e93a81960dd6f6c611eb793b3b26bedf204122c1',
    port: '5432'
});

app.get('/test', (req, res) => {
    res.send('MUSTAPHA MASTOUR');
});

app.get('/get/all/engines', (req, res) => {
    pool.query('SELECT * FROM engine', (err, result) => {
        if (err && result === undefined) {
            console.log(err)
            throw err
        }
        res.send(result.rows);
    })
});

app.get('/get/global/infos', (req, res) => {
    pool.query('SELECT * FROM global_info', (err, result) => {
        if (err && result === undefined) {
            console.log(err)
            throw err
        }
        res.send(result.rows);
    })
});

app.listen(settings.port, function() {
    console.log("Listening on port: ", settings.port);
})
