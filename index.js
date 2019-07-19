const pg = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
var mocker = require('mocker-data-generator').default
var faker = require('faker');


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

app.get('/generate/data', (req, res) => {
    var date = new Date();

        // var seconds = date.getSeconds()
        // seconds = seconds + 5
        // console.log(seconds)
        // date.setSeconds(seconds)

        var data = {
            date: date,
            temperatureOutside: faker.random.number({
                'min': 10,
                'max': 50
            }),
            powerConsumption: {
                motor1: faker.random.number({
                    'min': 3,
                    'max': 5
                }),
                motor2: faker.random.number({
                    'min': 3,
                    'max': 5
                }),
                motor3: faker.random.number({
                    'min': 3,
                    'max': 5
                }),
            },
            lights: faker.random.number({
                'min': 0,
                'max': 1
            }),
            fryingTemperature: faker.random.number({
                'min': 100,
                'max': 200
            }),
            gasConsumption: faker.random.number({
                'min': 5,
                'max': 25
            }),
            outputPotatoes: faker.random.number({
                'min': 1,
                'max': 2
            }) * 100,
          };
    
    res.send(data)
})

app.listen(settings.port, function() {
    console.log("Listening on port: ", settings.port);
})
