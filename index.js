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

app.get('/get/output/potatoes', (req, res) => {

    res.header("Access-Control-Allow-Origin", "*");
    var data = []

    for (var i = 0; i < 31; i++) {
        var fakeData = faker.random.number({
            'min': 100,
            'max': 200
        })

        data.push(fakeData)
    }

    res.send(data)

})

app.get('/generate/data', (req, res) => {

    res.header("Access-Control-Allow-Origin", "*");
    
    var date = new Date();

        var data = {
            date: date,
            temperatureOutside: faker.random.number({
                'min': 20,
                'max': 25
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
                'min': 18,
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
