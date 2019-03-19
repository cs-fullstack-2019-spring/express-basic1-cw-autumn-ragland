const express = require('express');
const app = express();

//send image and html file from public folder
app.use(express.static('public'));

//get request
app.get('/autumn', (req,res) => {
    res.send('Autumn created a server here')
});

//post request
app.post('/autumn', (req,res) => {
    res.send('Autumn got a post request')
});

//local host:8000
app.listen(8000, () => {
    console.log('local host 8000')
});
