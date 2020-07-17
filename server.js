const express = require('express');
const request = require('request');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

app.use(express.json());
app.use(cors());

app.get('', (req, res) => {
    request(
        {url: 'https://api.apixu.com/v1/current.json?key=46d5edb68336d2e2cdc20d5d46dd8cf5&q='},
        (error, response, body) => {
            if (error || response.statusCode !== 200) {
                return res.status(500).json({type: 'error', message: err.message});
            }
        
            res.json(JSON.parse(body));
        }
    )
});

