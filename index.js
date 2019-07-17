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


app.get('/test', (req, res) => {
    res.send('');
});

app.listen(settings.port, function() {
    console.log("Listening on port: ", settings.port);
})
