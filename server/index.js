
const express = require('express')
const nunjuck = require('nunjucks')
const fs = require('fs');
var path = require('path');
const app = express()
const port = 3000

app.get('/city/1.jpg', (req, res) => {
    const options = {
        root: path.join(__dirname)
    };

    const fileName = './city/1.jpg';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });

})
app.get('/main.css', (req, res) => {
    const options = {
        root: path.join(__dirname)
    };

    const fileName = 'main.css';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });

})
app.get('/base.js', (req, res) => {
    const options = {
        root: path.join(__dirname)
    };

    const fileName = 'base.js';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
})

app.get('/:id', (req, res) => {
    const mahalle = req.params.id;
    let rawdata = fs.readFileSync(`./mahalleler/${mahalle}.json`);
    let jsondata = JSON.parse(rawdata);
    res.type('html')
    res.send(nunjuck.render('./template/index.html', jsondata))
})


app.listen(port, () => {
    console.log(`Example app listening on port http://127.0.0.1:${port}`)
})